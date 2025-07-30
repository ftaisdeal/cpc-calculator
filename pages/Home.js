const mysql = require('mysql2/promise');
const db_config = require('../admin/db_config');
const pool = mysql.createPool(db_config);

const Home = async function (req, res) {

  const source = req.query.src;
  const referrer = req.get('referer') || null;
  const ip_address = req.ip;

  // Insert a record into the database for tracking clicks
  if (source) {
    try {
      await pool.query('INSERT INTO referrers (source, referrer, ip_address) VALUES (?, ?, ?)', [source, referrer, ip_address]);
    } catch (err) {
      console.error(err);
    }
  }

  const content = `<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CPC Calculator</title>
  <meta name="description" content="A system for displaying live calculations of cost-per-click from a range of sources, including QR codes.">
  <meta property="og:title" content="CPC Calculator<">
  <meta property="og:description" content="A system for displaying live calculations of cost-per-click from a range of sources, including QR codes.">
  <meta property="og:site_name" content="CPC Calculator">
  <meta property="og:image" content="OG-default.png">
  <meta property="og:image:type" content="image/png">
  <meta property="og:image:width" content="600">
  <meta property="og:image:height" content="600">
  <link rel="stylesheet" href="styles.css">
  <link rel="shortcut icon" href="favicon.png" type="image/x-icon" />
</head>

<body>
<div class="container">
<h1>Your Home Page</h1>
  <p>Replace the HTML with the HTML from your home page, or any other page for which you would like to track clicks.</p>
  <p>If you want to track additional pages, you will have to enter new routes in Express.</p>
  <p>The CPC tracking page is at /tracking.
  </div>
</body>

</html>`;

  res.send(`${content}`);

};

module.exports = Home;