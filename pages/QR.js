const Home = async function (req, res) {

  const content = `<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Planet A - The Show</title>
</head>

<body>
<h1>QR Code Tracking</h1>

</body>

</html>`;

  res.send(`${content}`);

}

module.exports = Home;