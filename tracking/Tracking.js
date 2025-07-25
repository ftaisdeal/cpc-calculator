const Tracking = async function (req, res) {

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

  const sources = [
    ['Backstage', 'backstage', '#88a'],
    ['YouTube', 'yt', '#88a'],
    ['SF posters 9/1', 'sf-2025-09-01', '#88a'],
    ['EB posters 9/1', 'eb-2025-09-01', '#88a'],
    ['Full Calendar', 'fc', '#88a']
  ];

  // Convert the code below into a sweep through the array above,
  // and generate the entire set of objects for use in Chart.js.

  const [rows] = await pool.query(`
    SELECT DATE(date_time) AS day, COUNT(*) AS hits 
    FROM referrers 
    WHERE date_time >= NOW() - INTERVAL 30 DAY AND source = '${sources[0][0]}' 
    GROUP BY day 
    ORDER BY day ASC;
  `);

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

  const backstage = `{
                label: '${sources[0][0]}',
                data: [${result}],
                tension: 0.4,
                borderWidth: 1,
                borderColor: ['${sources[0][2]}'],
                backgroundColor: ['${sources[0][2]}']
              }`;

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
    <h1>Traffic Sources</h1>
    <a href="https://planetatheshow.com/tracking?days=7">7 days</a> | 
    <a href="https://planetatheshow.com/tracking?days=14">14 days</a> | 
    <a href="https://planetatheshow.com/tracking?days=30">30 days</a> | 
    <a href="https://planetatheshow.com/tracking?days=60">60 days</a> | 
    <a href="https://planetatheshow.com/tracking?days=90">90 days</a>

    <div id="line-chart" style="width:100%; margin-top: 20px; padding: 20px; background-color: #fbfbfb; border: 1px solid #666;">
  
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
            labels: [${quotedDaysArr}],
            datasets: [
              ${backstage}
            ]
          }
        });
      </script>

    </div>

    <p><form action="/generate" method="post">
      <input type="text" name="code" required> <input type="submit" value="create new QR code">
    </form></p>
  </div>
</body>

</html>`;

/*
Get number of times a particular ip address appears in the table and build an array of ip address and hits per ip address
Get city for each ip address, then display a list of cities and the number of times a request came from that city
Will have to concatenate results if multiple ip addresses are included within a city in the results
*/

  res.send(`${content}`);

}

module.exports = Tracking;