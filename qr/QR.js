const Home = async function (req, res) {

  const mysql = require('mysql2/promise');
  const db_config = require('../admin/db_config');
  const pool = mysql.createPool(db_config);

  const [rows] = await pool.query(`
    SELECT DATE(date_time) AS day, COUNT(*) AS hits 
    FROM referrers 
    WHERE date_time >= NOW() - INTERVAL 30 DAY AND source = 'backstage' 
    GROUP BY day 
    ORDER BY day DESC;
  `);

  const dates = rows.map(entry => {
  // Convert the day string to a Date object
  const dateObj = new Date(entry.day);
  // Get month (add 1 since months are 0-indexed), pad with 0
  const month = (dateObj.getMonth() + 1).toString().padStart(2, '0');
  // Get day, pad with 0
  const day = dateObj.getDate().toString().padStart(2, '0');
  // Combine as "MM-DD"
  return `'${month}-${day}'`;
  });

  const hits = rows.map(entry => entry.hits);

  const content = `<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Planet A - Referrers</title>
  <link rel="stylesheet" href="/styles.css">
  <style>
    input[name="code"] {
      background-color: #f8f8f8;
      border: 1px solid #888;
    }
    input[name="code"]:focus {
      background-color: #fff;
    }
  </style>
  <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
</head>

<body>
  <div class="container">
    <a href="/index.html"><span class="title">Planet <span style="color: #88c;">A</span></span></a>
    <h1>Referrers</h1>
    <div style="width:100%; margin-top: 20px; padding: 20px; background-color: #fbfbfb; border: 1px solid #666;">
  
    <canvas id="myChart"></canvas>
      <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
      <script>
        new Chart(document.getElementById("myChart"), {
          type: 'line',
          options: {
            scales: {
              y: {
                beginAtZero: true, // This works for most cases
                min: 0             // Explicitly set to zero if needed
              }
            }
          },
          data: {

            labels: [${dates}],

            datasets: [{

              label: 'backstage',
              data: [${hits}],
              tension: 0.4,
              borderWidth: 1,
              borderColor: ['#88a'],
              backgroundColor: ['#88a']
            }]

          }
        });
      </script>

    </div>
    <br>
    <form action="/generate" method="post">
      <input type="text" name="code" required> <input type="submit" value="create new QR code">
    </form>
  </div>
</body>

</html>`;

  res.send(`${content}`);

}

module.exports = Home;