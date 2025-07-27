const Tracking = async function (req, res) {

  const sources = require('./sources');
  const mysql = require('mysql2/promise');
  const db_config = require('../admin/db_config');
  const pool = mysql.createPool(db_config);

  // Create array of days, one unquoted for use with the DB, the other quoted for use in Chart.js
  const NUM_DAYS = parseInt(req.query.days, 10) > 0 ? parseInt(req.query.days, 10) : 30;
  const daysArr = [];
  const now = new Date();
  for (let i = NUM_DAYS - 1; i >= 0; i--) {
    const d = new Date(now);
    d.setDate(now.getDate() - i);
    const mm = String(d.getMonth() + 1).padStart(2, '0');
    const dd = String(d.getDate()).padStart(2, '0');
    daysArr.push(`${mm}-${dd}`);
  }
  const quotedDaysArr = daysArr.map(day => `'${day}'`);

  const datasets = [];

  async function getSourceData(pool, daysArr, source, numDays) {
    const [rows] = await pool.query(`
      SELECT DATE(date_time) AS day, COUNT(*) AS hits 
      FROM referrers 
      WHERE date_time >= NOW() - INTERVAL ? DAY AND source = ? 
      GROUP BY day 
      ORDER BY day ASC;
    `, [numDays, source[0]]);

    const dateHitsArr = rows.map(entry => {
      const dateObj = new Date(entry.day);
      const month = (dateObj.getMonth() + 1).toString().padStart(2, '0');
      const day = dateObj.getDate().toString().padStart(2, '0');
      return { date: `${month}-${day}`, hits: entry.hits };
    });

    // Create a map for fast lookup
    const hitsMap = {};
    dateHitsArr.forEach(item => {
      hitsMap[item.date] = item.hits;
    });

    // Build result array
    const result = daysArr.map(day => hitsMap[day] || 0);

    // Return as object
    return {
                label: source[0],
                data: result,
                tension: 0.4,
                borderWidth: 1,
                borderColor: source[2],
                backgroundColor: source[2]
              };
  } // End function getSourceData

async function loadDatasets() {
  for (const source of sources) {
    const dataObj = await getSourceData(pool, daysArr, source, NUM_DAYS);
    datasets.push(dataObj);
  }
  // Format with line breaks between datasets but compact data arrays
  const formattedDatasets = datasets.map(dataset => JSON.stringify(dataset)).join(',\n              ');
  return `[\n              ${formattedDatasets}\n            ]`;
}

loadDatasets().then((datasetsJSON) => {
 const content = `<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CPC Calculator</title>
  <link rel="stylesheet" href="/styles.css">
  <style>
    table {
      border: 1px solid #888;
      border-collapse: collapse;
      padding: 2px;
    }
    th {
      border: 1px solid #888;
      border-collapse: collapse;
      text-align: left;
      font-size: 14px;
      font-weight: normal;
      background-color: #ccf;
      padding: 2px;
    }
    td {
      border: 1px solid #888;
      border-collapse: collapse;
      background-color: #eef;
      font-size: 14px;
      color: #444;
      padding: 2px;
    }
    input {
      background-color: #eef;
      border: none;
      background: transparent;
      color: #444;
      padding: 2px;
    }
    input:focus {
      background-color: #fff !important;
      color: #444;
      padding: 2px;
    }
    /* More specific selector to override inline styles */
    #edit_sources input[type="text"] {
      color: #444 !important;
      padding: 2px;
    }
    input[type="submit"] {
      background-color: #bcb;
      border: solid 1px #888;
      margin-top: 2px;
    }
    #totals {
      margin-top: 20px;
      padding: 15px;
      background-color: #f5f5f5;
      border: 1px solid #ccc;
    }
  </style>
  <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
</head>

<body>
  <div class="container">
    <a href="/index.html"><span class="title">Planet <span style="color: #88c;">A</span></span></a>
    <h1>CPC Calculator</h1>
    <a href="/tracking?days=7">7 days</a> | 
    <a href="/tracking?days=14">14 days</a> | 
    <a href="/tracking?days=30">30 days</a> | 
    <a href="/tracking?days=60">60 days</a> | 
    <a href="/tracking?days=90">90 days</a>

    <div id="line-chart" style="width:100%; margin-top: 20px; padding: 20px; background-color: #fbfbfb; border: 1px solid #666;">
  
    <canvas id="SourceChart"></canvas>
      <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
      <script>
        new Chart(document.getElementById("SourceChart"), {
          type: 'line',
          options: {
            plugins: {
              legend: {
                display: true
              }
            },
            scales: {
              y: {
                beginAtZero: true,
                min: 0
              }
            }
          },
          data: {
            labels: [${quotedDaysArr}],
            datasets: ${datasetsJSON}
          }
        });
      </script>

      <script>
        function toggleHidden(id) {
          const editDiv = document.getElementById(id);
          if (editDiv.style.display === 'none' || editDiv.style.display === '') {
            editDiv.style.display = 'block';
          } else {
            editDiv.style.display = 'none';
          }
        }
      </script>

    </div>

    <div id="totals">
      Totals
      <div id="dataset-totals"></div>
      <script>
        const datasets = ${datasetsJSON};
        const sources = ${JSON.stringify(sources)};
        const totalsDiv = document.getElementById('dataset-totals');
        
        // Calculate totals
        let datasetTotals = datasets.map((dataset, index) => ({
          label: dataset.label,
          total: dataset.data.reduce((sum, value) => sum + value, 0),
          cost: parseFloat(sources[index][3]) || 0
        }));
        
        // Add CPC calculation
        datasetTotals.forEach(item => {
          item.cpc = item.total > 0 ? item.cost / item.total : 0;
        });
        
        // Initial sort by total clicks descending
        datasetTotals.sort((a, b) => b.total - a.total);
        
        // Sorting state
        let sortState = { column: 1, ascending: false }; // Start sorted by clicks descending
        
        function renderTable() {
          totalsDiv.innerHTML = '';
          
          // Create table
          const table = document.createElement('table');
          
          // Create header
          const headerRow = document.createElement('tr');
          const headers = ['Source', 'Clicks', 'Cost', 'CPC'];
          headers.forEach((headerText, index) => {
            const th = document.createElement('th');
            th.textContent = headerText;
            th.style.cursor = 'pointer';
            th.style.userSelect = 'none';
            
            // Make Clicks column 2 characters wider to accommodate sort arrow
            if (index === 1) {
              th.style.minWidth = '3.5em';
            }
            
            // Add sort indicator
            if (sortState.column === index) {
              th.textContent += sortState.ascending ? ' ↑' : ' ↓';
            }
            
            // Add click handler
            th.onclick = () => sortTable(index);
            
            headerRow.appendChild(th);
          });
          table.appendChild(headerRow);
          
          // Create data rows
          datasetTotals.forEach(item => {
            const row = document.createElement('tr');
            
            const cellValues = [
              item.label, 
              item.total, 
              '$' + item.cost.toFixed(2), 
              '$' + item.cpc.toFixed(2)
            ];
            
            cellValues.forEach((cellText, index) => {
              const td = document.createElement('td');
              td.textContent = cellText;
              // Right-align columns 2, 3, and 4 (Clicks, Cost, CPC)
              if (index >= 1) {
                td.style.textAlign = 'right';
                td.style.backgroundColor = '#fff';
              }
              row.appendChild(td);
            });
            table.appendChild(row);
          });
          
          totalsDiv.appendChild(table);
        }
        
        function sortTable(columnIndex) {
          // Toggle sort direction if same column, otherwise start with ascending
          if (sortState.column === columnIndex) {
            sortState.ascending = !sortState.ascending;
          } else {
            sortState.column = columnIndex;
            sortState.ascending = true;
          }
          
          // Sort the data
          datasetTotals.sort((a, b) => {
            let valueA, valueB;
            
            switch (columnIndex) {
              case 0: // Source
                valueA = a.label.toLowerCase();
                valueB = b.label.toLowerCase();
                break;
              case 1: // Clicks
                valueA = a.total;
                valueB = b.total;
                break;
              case 2: // Cost
                valueA = a.cost;
                valueB = b.cost;
                break;
              case 3: // CPC
                valueA = a.cpc;
                valueB = b.cpc;
                break;
            }
            
            if (valueA < valueB) return sortState.ascending ? -1 : 1;
            if (valueA > valueB) return sortState.ascending ? 1 : -1;
            return 0;
          });
          
          renderTable();
        }
        
        // Initial render
        renderTable();
      </script>
    </div>

    <br>
    <a href="#" onclick="toggleHidden('edit_sources'); return false;">Edit Sources</a>
    <div id="edit_sources" style="display: none;">
      <form action="/sources" method="post">
        <div id="inputs">

        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Parameter</th>
              <th>Color</th>
              <th>Cost</th>
            </tr>
          </thead>
          <tbody>
        ${(() => {
          // Calculate max length for each column
          const maxLengths = [0, 0, 0, 0];
          sources.forEach(subArr => {
            subArr.forEach((val, j) => {
              if (val && val.length > maxLengths[j]) {
                maxLengths[j] = val.length;
              }
            });
          });
          // Use the max length of each column to set the table cell width
          const inputSizes = maxLengths;
          
          return sources.map((subArr, i) => 
            `    <tr>
                ${subArr.map((val, j) => 
                `<td${j === 3 ? ' style="text-align: right;"' : ''}><input type="text" name="data[${i}][${j}]" value="${val}" size="${inputSizes[j]}"${j === 3 ? ' style="text-align: right;"' : ''}></td>`
           ).join('')}
            </tr>`
          ).join('\n        ');
        })()}
          </tbody>
        </table>

        </div>
        <input type="submit" value="update">
      </form>
    </div>
    <br>
    <a href="#" onclick="toggleHidden('create_qr'); return false;">Create QR Code</a>
    <div id="create_qr" style="display: none;">
      <form action="/generate" method="post">
        <input type="text" name="code" required> <input type="submit" value="create">
      </form>
    </div>
  </div>
</body>

</html>`;

 res.send(`${content}`);

});

}

module.exports = Tracking;