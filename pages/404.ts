const NotFound = function (req, res) {
  const content = `<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>404 - Page Not Found | CPC Calculator</title>
  <meta name="description" content="The page you're looking for could not be found.">
  <link rel="stylesheet" href="/styles.css">
  <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
</head>

<body>
  <div class="container">
    <h1>404 - Page Not Found</h1>
    <p>Sorry, the page you're looking for doesn't exist.</p>
    <p><a href="/">Return to Home</a></p>
    <p><a href="/tracking">Go to Tracking Dashboard</a></p>
  </div>
</body>

</html>`;

  res.status(404).send(content);
};

module.exports = NotFound;
