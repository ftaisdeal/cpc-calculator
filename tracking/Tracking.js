const Tracking = async function (req, res) {

  // Load sources fresh each time to pick up any updates
  const sources = require('./sources');
  const config = require('../config/config');
  const mysql = require('mysql2/promise');
  const db_config = require('../admin/db_config');
  const pool = mysql.createPool(db_config);
  const fs = require('fs');
  const path = require('path');

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
    `, [numDays, source[1]]);  // Use source[1] (parameter) instead of source[0] (name)

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

// Function to check if QR code files exist
function hasQRCodeFiles() {
  try {
    const codesDir = path.join(__dirname, 'codes');
    if (!fs.existsSync(codesDir)) {
      return false;
    }
    const files = fs.readdirSync(codesDir);
    return files.some(file => file.toLowerCase().endsWith('.png'));
  } catch (error) {
    console.error('Error checking QR code files:', error);
    return false;
  }
}

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
 // Check if QR code files exist
 const showQRCodesLink = hasQRCodeFiles();
 
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
    #cities td {
      background-color: #fff;
    }
    input {
      background-color: #eef;
      border: none;
      background: transparent;
      color: #444;
      padding: 3px;
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
    button {
      background-color: #eef;
      border: 1px solid #888;
      color: #444;
      padding: 3px;
      cursor: pointer;
    }
    select {
      color: #444;
      padding: 2px;
    }
    .btn-add {
      background-color: #bcb;
      border: solid 1px #888;
      margin-top: 2px;
      font-size: 13px;
    }
    .btn-delete {
      background-color: #cbb;
    }
    .btn-save {
      background-color: #bcb;
    }
    #line-chart {
      width:90%;
      margin-top: 20px;
      padding: 20px;
      background-color: #fbfbfb;
      border: 1px solid #666;
    }
    #totals {
      width: 90%;
      padding: 15px;
      background-color: #f5f5f5;
      border: 1px solid #ccc;
    }
    .toggle_hide {
      width: 90%;
      padding: 15px;
      background-color: #f5f5f5;
      border: 1px solid #ccc;
      display: none;
    }
    #sources_update {
      margin-top: 6px;
    }
    #qr_src_input {
      border: 1px solid #888;
      background-color: #fff;
      width: 4ch;
    }
    #success-message {
      color: #484;
      font-size: 14px;
      display: none;
    }
  </style>
  <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
</head>

<body>
  <div class="container">
    <span class="title">Planet <span style="color: #88c;">A</span></span>
    <h1>CPC Calculator</h1>
    <a href="/tracking?days=7">7 days</a> | 
    <a href="/tracking?days=14">14 days</a> | 
    <a href="/tracking?days=30">30 days</a> | 
    <a href="/tracking?days=60">60 days</a> | 
    <a href="/tracking?days=90">90 days</a>

    <div id="line-chart">
      <div style="margin-bottom: 15px;">
        <div style="display: flex; flex-wrap: wrap; gap: 15px; margin-bottom: 10px;">
          ${(() => {
            return sources.map((source, index) => 
              `<label style="display: flex; align-items: center; cursor: pointer;">
                <input type="checkbox" id="source-${index}" value="${index}" checked style="margin-right: 6px;">
                <span style="color: ${source[2]}; font-size: 1.5em;">●</span>
                <span style="margin-left: 4px;">${source[0]}</span>
              </label>`
            ).join('\n          ');
          })()}
          <button id="select-all" style="padding: 3px 6px; font-size: 12px; border: 1px solid #888; background-color: #eef; cursor: pointer;">select all</button>
          <button id="select-none" style="padding: 3px 6px; font-size: 12px; border: 1px solid #888; background-color: #eef; cursor: pointer;">select none</button>
        </div>
      </div>
  
    <canvas id="SourceChart"></canvas>
      <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
      <script>
        const allDatasets = ${datasetsJSON};
        const chartLabels = [${quotedDaysArr}];
        
        // Function to save checkbox states to localStorage
        function saveCheckboxStates() {
          const checkboxes = document.querySelectorAll('input[type="checkbox"][id^="source-"]');
          const states = {};
          checkboxes.forEach(checkbox => {
            states[checkbox.id] = checkbox.checked;
          });
          localStorage.setItem('sourceCheckboxStates', JSON.stringify(states));
        }
        
        // Function to load checkbox states from localStorage
        function loadCheckboxStates() {
          const saved = localStorage.getItem('sourceCheckboxStates');
          if (saved) {
            try {
              const states = JSON.parse(saved);
              const checkboxes = document.querySelectorAll('input[type="checkbox"][id^="source-"]');
              checkboxes.forEach(checkbox => {
                if (states.hasOwnProperty(checkbox.id)) {
                  checkbox.checked = states[checkbox.id];
                }
              });
            } catch (error) {
              console.error('Error loading checkbox states:', error);
            }
          }
        }
        
        // Initialize chart
        const chart = new Chart(document.getElementById("SourceChart"), {
          type: 'line',
          options: {
            plugins: {
              legend: {
                display: false
              }
            },
            scales: {
              y: {
                beginAtZero: true,
                min: 0,
                ticks: {
                  callback: function(value) {
                    if (Number.isInteger(value)) {
                      return value;
                    }
                  },
                  stepSize: 1
                }
              }
            }
          },
          data: {
            labels: chartLabels,
            datasets: allDatasets
          }
        });
        
        // Function to update chart based on checkbox selection
        function updateChart() {
          const checkboxes = document.querySelectorAll('input[type="checkbox"][id^="source-"]');
          const selectedDatasets = [];
          
          checkboxes.forEach((checkbox, index) => {
            if (checkbox.checked) {
              selectedDatasets.push(allDatasets[index]);
            }
          });
          
          chart.data.datasets = selectedDatasets;
          chart.update();
          
          // Save state after updating
          saveCheckboxStates();
        }
        
        // Load saved states on page load
        loadCheckboxStates();
        
        // Add event listeners to checkboxes
        document.querySelectorAll('input[type="checkbox"][id^="source-"]').forEach(checkbox => {
          checkbox.addEventListener('change', updateChart);
        });
        
        // Select All button
        document.getElementById('select-all').addEventListener('click', function() {
          document.querySelectorAll('input[type="checkbox"][id^="source-"]').forEach(checkbox => {
            checkbox.checked = true;
          });
          updateChart();
        });
        
        // Select None button
        document.getElementById('select-none').addEventListener('click', function() {
          document.querySelectorAll('input[type="checkbox"][id^="source-"]').forEach(checkbox => {
            checkbox.checked = false;
          });
          updateChart();
        });
        
        // Initial chart update based on loaded states
        updateChart();
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
    <br>
    CPC
    <div id="totals">
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
        
        // Initial sort by CPC ascending
        datasetTotals.sort((a, b) => a.cpc - b.cpc);
        
        // Sorting state
        let sortState = { column: 3, ascending: true }; // Start sorted by CPC ascending
        
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
    <a href="#" onclick="toggleHidden('cities'); return false;">Cities</a>
    <div id="cities" class="toggle_hide">
      <form id="cities-form">
        <label for="city-source">Source: </label>
        <select name="source" id="city-source">
        ${(() => {
          return sources.map(source => 
            `<option value="${source[1]}">${source[0]}</option>`
          ).join('\n          ');
        })()}
        </select>
        <input type="submit" value="get location info">
        <div id="cities-status" style="margin-top: 10px; color: #666; font-style: italic; display: none;">
          Loading IP location data...
        </div>
      </form>
      <div id="cities-results" style="margin-top: 20px;"></div>
      
      <script>
        document.getElementById('cities-form').addEventListener('submit', function(e) {
          e.preventDefault(); // Prevent normal form submission
          
          const sourceSelect = this.querySelector('select[name="source"]');
          const statusDiv = document.getElementById('cities-status');
          const resultsDiv = document.getElementById('cities-results');
          
          // Show loading message
          statusDiv.style.display = 'block';
          statusDiv.style.color = '#666';
          statusDiv.textContent = 'Loading IP location data...';
          resultsDiv.innerHTML = '';
          
          // Submit via AJAX
          const formData = new URLSearchParams();
          formData.append('source', sourceSelect.value);
          formData.append('days', ${NUM_DAYS});
          
          fetch('/ip-locations', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: formData
          })
          .then(response => {
            if (!response.ok) {
              throw new Error('Failed to fetch location data');
            }
            return response.json();
          })
          .then(data => {
            // Hide loading message
            statusDiv.style.display = 'none';
            
            // Display results
            if (data.length === 0) {
              resultsDiv.innerHTML = '<p>No IP addresses found for the selected source.</p>';
              return;
            }
            
            // Sort data by Hits descending by default
            data.sort((a, b) => b.hits - a.hits);
            
            // Sorting state for cities table
            let citiesSortState = { column: 1, ascending: false }; // Start sorted by Hits descending
            
            function renderCitiesTable(tableData) {
              // Create table
              let tableHTML = \`
                <table id="cities-table">
                  <thead>
                    <tr>
                      <th style="cursor: pointer; user-select: none;" onclick="sortCitiesTable(0)">IP Address\${citiesSortState.column === 0 ? (citiesSortState.ascending ? ' ↑' : ' ↓') : ''}</th>
                      <th style="cursor: pointer; user-select: none; text-align: right;" onclick="sortCitiesTable(1)">Hits\${citiesSortState.column === 1 ? (citiesSortState.ascending ? ' ↑' : ' ↓') : ''}</th>
                      <th style="cursor: pointer; user-select: none;" onclick="sortCitiesTable(2)">City\${citiesSortState.column === 2 ? (citiesSortState.ascending ? ' ↑' : ' ↓') : ''}</th>
                      <th style="cursor: pointer; user-select: none;" onclick="sortCitiesTable(3)">Region\${citiesSortState.column === 3 ? (citiesSortState.ascending ? ' ↑' : ' ↓') : ''}</th>
                      <th style="cursor: pointer; user-select: none;" onclick="sortCitiesTable(4)">Country\${citiesSortState.column === 4 ? (citiesSortState.ascending ? ' ↑' : ' ↓') : ''}</th>
                      <th style="cursor: pointer; user-select: none;" onclick="sortCitiesTable(5)">Coordinates\${citiesSortState.column === 5 ? (citiesSortState.ascending ? ' ↑' : ' ↓') : ''}</th>
                    </tr>
                  </thead>
                  <tbody>
              \`;
              
              tableData.forEach((item, index) => {
                tableHTML += \`
                  <tr>
                    <td style="background-color: #fff;">\${item.ip}</td>
                    <td style="text-align: right; background-color: #fafafa;">\${item.hits}</td>
                    <td style="background-color: #fff;">\${item.city}</td>
                    <td style="background-color: #fafafa;">\${item.region}</td>
                    <td style="background-color: #fff;">\${item.country}</td>
                    <td style="background-color: #fafafa;"><a href="https://www.google.com/maps/@\${item.coordinates},15z" target="_blank">\${item.coordinates}</a></td>
                  </tr>
                \`;
              });
              
              tableHTML += \`
                  </tbody>
                </table>
              \`;
              
              return tableHTML;
            }
            
            // Store data globally for sorting
            window.citiesData = data;
            
            // Define sorting function
            window.sortCitiesTable = function(columnIndex) {
              // Toggle sort direction if same column, otherwise start with ascending
              if (citiesSortState.column === columnIndex) {
                citiesSortState.ascending = !citiesSortState.ascending;
              } else {
                citiesSortState.column = columnIndex;
                citiesSortState.ascending = true;
              }
              
              // Sort the data
              window.citiesData.sort((a, b) => {
                let valueA, valueB;
                
                switch (columnIndex) {
                  case 0: // IP Address
                    valueA = a.ip;
                    valueB = b.ip;
                    break;
                  case 1: // Hits
                    valueA = parseInt(a.hits);
                    valueB = parseInt(b.hits);
                    break;
                  case 2: // City
                    valueA = a.city.toLowerCase();
                    valueB = b.city.toLowerCase();
                    break;
                  case 3: // Region
                    valueA = a.region.toLowerCase();
                    valueB = b.region.toLowerCase();
                    break;
                  case 4: // Country
                    valueA = a.country.toLowerCase();
                    valueB = b.country.toLowerCase();
                    break;
                  case 5: // Coordinates
                    valueA = a.coordinates;
                    valueB = b.coordinates;
                    break;
                }
                
                if (valueA < valueB) return citiesSortState.ascending ? -1 : 1;
                if (valueA > valueB) return citiesSortState.ascending ? 1 : -1;
                return 0;
              });
              
              // Re-render table
              const resultsDiv = document.getElementById('cities-results');
              resultsDiv.innerHTML = renderCitiesTable(window.citiesData);
            };
            
            // Initial render with default sort
            resultsDiv.innerHTML = renderCitiesTable(data);
          })
          .catch(error => {
            // Show error message
            statusDiv.style.display = 'block';
            statusDiv.style.color = '#c66';
            statusDiv.textContent = 'Error loading location data';
            console.error('Error:', error);
          });
        });
      </script>
    </div>
    <br>
    <a href="#" onclick="toggleHidden('edit_sources'); return false;">Edit Sources</a>
    <div id="edit_sources" class="toggle_hide">
      <form action="/sources" method="post">
        <div id="inputs">
        <table id="sources-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Param</th>
              <th>Color</th>
              <th>Cost</th>
              <th>Action</th>
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
                <td><button type="button" onclick="deleteSourceRow(this)" class="btn-delete">delete</button></td>
            </tr>`
          ).join('\n        ');
        })()}
            <tr id="add-source-row" style="display: none;">
              <td><input type="text" name="new_name" placeholder="Name" size="10"></td>
              <td><input type="text" name="new_param" placeholder="param" size="5"></td>
              <td><input type="text" name="new_color" placeholder="#888" size="5"></td>
              <td style="text-align: right;"><input type="text" name="new_cost" placeholder="0.00" size="6" style="text-align: right;"></td>
              <td>
              <button type="button" onclick="cancelNewSource()" class="btn-delete">cancel</button>
              <button type="button" onclick="saveNewSource()" class="btn-save">add</button>
                <span id="validation-message" style="color: #c66; display: none;">Please fill in all fields.</span>
              </td>
            </tr>
          </tbody>
        </table>
        </div>
        <input id="sources_update" type="submit" value="update">
        <button type="button" id="add-source-btn" onclick="showAddSourceRow()" class="btn-add">add source</button>
        <div id="message-area" style="margin-top: 5px;">
          <span id="success-message">Please now update.</span>
        </div>
      </form>
      
      <script>
        // Function to delete a source row
        function deleteSourceRow(button) {
          const row = button.closest('tr');
          row.remove();
          renumberRows();
          
          // Show the "Please now update" message
          const successMessage = document.getElementById('success-message');
          successMessage.style.display = 'inline';
        }
        
        // Function to show the add new source row
        function showAddSourceRow() {
          document.getElementById('add-source-row').style.display = 'table-row';
          document.getElementById('add-source-btn').style.display = 'none';
          // Hide any previous messages
          document.getElementById('validation-message').style.display = 'none';
          document.getElementById('success-message').style.display = 'none';
        }
        
        // Function to save a new source
        function saveNewSource() {
          const row = document.getElementById('add-source-row');
          const inputs = row.querySelectorAll('input[type="text"]');
          const validationMessage = document.getElementById('validation-message');
          const successMessage = document.getElementById('success-message');
          
          // Validate that all fields are filled
          let allFilled = true;
          inputs.forEach(input => {
            if (!input.value.trim()) {
              allFilled = false;
              input.style.backgroundColor = '#ccc';
            } else {
              input.style.backgroundColor = '';
            }
          });
          
          if (!allFilled) {
            validationMessage.style.display = 'inline';
            successMessage.style.display = 'none';
            return;
          }
          
          // Hide validation message
          validationMessage.style.display = 'none';
          
          // Get the tbody and current row count
          const tbody = document.querySelector('#sources-table tbody');
          const currentRowCount = tbody.querySelectorAll('tr').length - 1; // Exclude the add row
          
          // Create new row with proper indices
          const newRow = document.createElement('tr');
          newRow.innerHTML = \`
            <td><input type="text" name="data[\${currentRowCount}][0]" value="\${inputs[0].value}" size="10"></td>
            <td><input type="text" name="data[\${currentRowCount}][1]" value="\${inputs[1].value}" size="5"></td>
            <td><input type="text" name="data[\${currentRowCount}][2]" value="\${inputs[2].value}" size="5"></td>
            <td style="text-align: right;"><input type="text" name="data[\${currentRowCount}][3]" value="\${inputs[3].value}" size="6" style="text-align: right;"></td>
            <td><button type="button" onclick="deleteSourceRow(this)" class="btn-delete">delete</button></td>
          \`;
          
          // Insert before the add row
          tbody.insertBefore(newRow, row);
          
          // Clear the add row inputs and hide it
          inputs.forEach(input => input.value = '');
          document.getElementById('add-source-row').style.display = 'none';
          document.getElementById('add-source-btn').style.display = 'inline-block';
          
          // Show success message
          successMessage.style.display = 'inline';
        }
        
        // Function to cancel adding a new source
        function cancelNewSource() {
          document.getElementById('add-source-row').style.display = 'none';
          document.getElementById('add-source-btn').style.display = 'inline-block';
          
          // Clear any validation highlighting and message
          const inputs = document.querySelectorAll('#add-source-row input[type="text"]');
          inputs.forEach(input => {
            input.value = '';
            input.style.backgroundColor = '';
          });
          
          // Hide messages
          document.getElementById('validation-message').style.display = 'none';
          document.getElementById('success-message').style.display = 'none';
        }
        
        // Function to renumber all row indices after deletion
        function renumberRows() {
          const tbody = document.querySelector('#sources-table tbody');
          const rows = tbody.querySelectorAll('tr:not(#add-source-row)');
          
          rows.forEach((row, index) => {
            const inputs = row.querySelectorAll('input[type="text"]');
            inputs.forEach((input, fieldIndex) => {
              input.name = \`data[\${index}][\${fieldIndex}]\`;
            });
          });
        }
      </script>
    </div>
    <br>
    <a href="#" onclick="toggleHidden('create_qr'); return false;">Create QR Code</a>
    <br>
    ${showQRCodesLink ? '<a href="/qr-codes">View QR Codes</a>' : ''}
    <div id="create_qr" class="toggle_hide">
      <form id="qr-form">
        ${config.URL}?src=<input type="text" id="qr_src_input" name="code" required> 
        <input type="submit" value="create">
        <div id="qr-status" style="margin-top: 10px; color: #666; font-style: italic; display: none;">
          QR downloaded to desktop and stored in "tracking/codes."
        </div>
      </form>
      <script>
        // Prevent spaces in QR code input
        document.querySelector('input[name="code"]').addEventListener('keypress', function(e) {
          if (e.key === ' ') {
            e.preventDefault();
          }
        });
        
        document.getElementById('qr-form').addEventListener('submit', function(e) {
          e.preventDefault(); // Prevent normal form submission
          
          const codeInput = this.querySelector('input[name="code"]');
          const statusDiv = document.getElementById('qr-status');
          
          // Validate that the code field is not empty
          if (!codeInput.value.trim()) {
            // Show validation message manually since we prevented default
            codeInput.setCustomValidity('Please fill out this field.');
            codeInput.reportValidity();
            return;
          }
          
          // Clear any previous validation
          codeInput.setCustomValidity('');
          
          // Submit via AJAX with URL-encoded data
          const formData = new URLSearchParams();
          formData.append('code', codeInput.value);
          
          fetch('/generate', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: formData
          })
          .then(response => {
            if (response.ok) {
              // Show success message
              statusDiv.style.display = 'block';
              statusDiv.style.color = '#666';
              statusDiv.textContent = 'QR downloaded to desktop and stored in "tracking/codes"';
              
              // Clear the input field
              codeInput.value = '';
              
              // Hide message after 5 seconds
              setTimeout(() => {
                statusDiv.style.display = 'none';
              }, 5000);
            } else {
              throw new Error('Failed to generate QR code');
            }
          })
          .catch(error => {
            // Show error message
            statusDiv.style.display = 'block';
            statusDiv.style.color = '#c66';
            statusDiv.textContent = 'Error generating QR code';
            console.error('Error:', error);
          });
        });
      </script>
    </div>
  </div>
</body>

</html>`;

 // Add cache-busting headers to ensure fresh data
 res.set({
   'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
   'Pragma': 'no-cache',
   'Expires': '0',
   'Surrogate-Control': 'no-store'
 });

 res.send(`${content}`);

});

}

module.exports = Tracking;