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
  <title>Planet A - Referrers</title>
  <link rel="stylesheet" href="/styles.css">
  <style>
    input {
      background-color: #eef;
      border: 1px solid #888;
    }
    input:focus {
      background-color: #fff;
    }
    input[type="submit"] {
      background-color: #bcb;
    }
  </style>
  <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
</head>

<body>
  <div class="container">
    <a href="/index.html"><span class="title">Planet <span style="color: #88c;">A</span></span></a>
    <h1>Traffic Sources</h1>
    <a href="https://planetatheshow.com/tracking?days=7">7 days</a> | 
    <a href="https://planetatheshow.com/tracking?days=14">14 days</a> | 
    <a href="https://planetatheshow.com/tracking?days=30">30 days</a> | 
    <a href="https://planetatheshow.com/tracking?days=60">60 days</a> | 
    <a href="https://planetatheshow.com/tracking?days=90">90 days</a>

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

    <div style="margin-top: 20px; padding: 15px; background-color: #f5f5f5; border: 1px solid #ccc;">
      <b>Totals</b>
      <div id="dataset-totals"></div>
      <script>
        const datasets = ${datasetsJSON};
        const totalsDiv = document.getElementById('dataset-totals');
        
        // Calculate totals and sort in decreasing order
        const datasetTotals = datasets.map(dataset => ({
          label: dataset.label,
          total: dataset.data.reduce((sum, value) => sum + value, 0)
        })).sort((a, b) => b.total - a.total);
        
        datasetTotals.forEach(item => {
          const totalLine = document.createElement('div');
          totalLine.textContent = item.label + ': ' + item.total;
          totalsDiv.appendChild(totalLine);
        });
      </script>
    </div>

    <br>
    <a href="#" onclick="toggleHidden('edit_sources'); return false;">Edit Sources</a>
    <div id="edit_sources" style="display: none;">
      <form action="/sources" method="post">
        <div id="inputs">
        ${sources.map((subArr, i) => 
          subArr.map((val, j) => 
            `<input type="text" name="data[${i}][${j}]" value="${val}">`
          ).join('') + (i < sources.length - 1 ? '<br>\n        ' : '')
        ).join('')}
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