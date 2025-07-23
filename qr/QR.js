const Home = async function (req, res) {

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
            labels: ['date 1', 'date 2', 'date 3', 'date 4'],
            datasets: [{
              label: 'YouTube',
              data: [3, 10, 8, 6],
              tension: 0.4,
              borderWidth: 1,
              borderColor: ['#88a'],
              backgroundColor: ['#88a']
            },
            {
              label: 'Poster SF',
              data: [6, 8, 14, 9],
              tension: 0.4,
              borderWidth: 1,
              borderColor: ['#8a8'],
              backgroundColor: ['#8a8']
            },
            {
              label: 'Poster East Bay',
              data: [2, 6, 14, 4],
              tension: 0.4,
              borderWidth: 1,
              borderColor: ['#a88'],
              backgroundColor: ['#a88']
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