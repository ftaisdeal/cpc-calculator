const Email = function (req, res) {

  const mysql = require('mysql2');
  const db_config = require('../db_config');
  const connection = mysql.createConnection(db_config);
  const Error = require('../pages/Error');
  const sendEmail = require('../functions/sendEmail');

  if (!req.body.email) {
    Error(res, "No email entered.", "You didn't enter an email address.");
    return;
  }

  const update_query = `INSERT IGNORE INTO newsletter SET email = "${req.body.email}";`;

  connection.query(update_query, (error) => {

    if (error) {
      Error(res, error, "An error occurred.");
      return;
    };

    const body = `${req.body.email}`;
    const html = `<html>
    <head>
    <style>
body {
font-family: Verdan, Arial, sans-serif;
font-size: 1.25em;
}
h1 {
color: #444;
font-weight: normal;
padding: 0;
}
.title {
color: #888;
margin-top: 0px;
margin-bottom: 30px;
}
.container {
display: flex;
align-items: center;
}  
.container img {
margin-right: 6px;
}
.container .text {
display: inline-block;
vertical-align: middle;
}
</style>
</head>
<body>
<div class="container">
<h1><a href="https://sustainablechoices.green"><img src="https://sustainablechoices.green/img/logo.png" style=></a> <span class="text title">Sustainable Choices</span></h1>
</div>
Thank you for signing up for our occasional newsletter.
<p>You won't hear from us often, but we'll try to make it great every time.</p>
<p>You can unsubscribe whenever you want.</p>
</body>
</html>`;

    sendEmail(req.body.email, 'Sustainable Choices: Email signup', body, html);

    const { header, footer } = require('../components');
    const content = `<h1>Thank you</h1>
<p>Thank you for signing up for our occasional newsletter.</p>
<p>You won't hear from us often, but we'll try to make it great every time.</p>
<div class="bottom_padding"></div>`;

    res.send(`${header('Sustainable Choices email signup')}
${content}
${footer}`);

  });

  connection.end();

}

module.exports = Email;