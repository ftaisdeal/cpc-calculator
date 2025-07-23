const Home = async function (req, res) {

  const content = `<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Planet A - QR Code Tracking</title>
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
    <h1>QR Code Tracking</h1>
    <div style="width:100%; height: 600px; margin-top: 20px; padding: 20px; background-color: #eee; border: 1px solid #666;">
      Data Visualizations
      <canvas id="myChart"></canvas>
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script>
  new Chart(document.getElementById("myChart"), {
    type: 'bar',
    data: {
      labels: ['Red', 'Blue', 'Yellow'],
      datasets: [{
        label: 'Votes',
        data: [12, 19, 3],
        backgroundColor: ['red', 'blue', 'yellow']
      }]
    }
  });
</script>
    </div>
    <br>
    <form action="/generate" method="post">
      <input type="text" name="code" required> <input type="submit" value="create new code">
    </form>
  </div>
</body>

</html>`;

  res.send(`${content}`);

}

module.exports = Home;