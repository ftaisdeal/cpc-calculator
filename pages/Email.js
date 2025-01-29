const Email = function (req, res) {

const mysql = require('mysql2/promise');
const crypto = require('crypto');

const dbConfig = require('../admin/db_config');

async function generateToken() {
    return crypto.randomBytes(16).toString('hex'); // 16 bytes = 32 hex characters
}

async function updateTokens() {
    const connection = await mysql.createConnection(dbConfig);
    
    try {
        // Fetch all records where token is NULL or empty
        const [rows] = await connection.execute("SELECT id FROM your_table WHERE token IS NULL OR token = ''");

        for (const row of rows) {
            let token;
            let isUnique = false;

            // Ensure uniqueness by checking the database before inserting
            while (!isUnique) {
                token = await generateToken();
                const [existing] = await connection.execute("SELECT id FROM email_update WHERE token = ?", [token]);
                if (existing.length === 0) {
                    isUnique = true;
                }
            }

            // Update the record with the generated token
            await connection.execute("UPDATE email_update SET token = ? WHERE id = ?", [token, row.id]);
            console.log(`Updated ID ${row.id} with token ${token}`);
        }
        
        console.log('All records updated successfully.');
    } catch (error) {
        console.error('Error updating tokens:', error);
    } finally {
        await connection.end();
    }
}

// Run the script
updateTokens();

const { header, footer } = require('../components');
const content = `<h1>Thank you</h1>
<p>Thank you for signing up for updates on performances of Adventure Cabaret.</p>
<p>You won't hear from us often, but we'll try to make it great every time.</p>
<div class="bottom_padding"></div>`;

res.send(`${header('Email update signup')}
${content}
${footer}`);

/*

  const mysql = require('mysql');
  const crypto = require('crypto');
  const db_config = require('../admin/db_config');
  const connection = mysql.createConnection(db_config);
  const Error = require('./Error');
  const sendEmail = require('../functions/sendEmail');

  // body.email is for spam block, body.liame is the actual email field

  // Spam block test
  if (req.body.email) {
    Error(res, "Thank you.", "Thanks for joining our email list.");
    return;  
  }

  if (!req.body.liame) {
    Error(res, "No email entered.", "You didn't enter an email address.");
    return;
  }

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  function isValidEmail(email) {
    return emailRegex.test(email);
  }

  if (!isValidEmail(req.body.liame)) {
    Error(res, "Not a valid email address", "You didn't enter a valid email address.");
    return;
  }

  function generateUrlSafeToken() {
    return crypto.randomBytes(32).toString('base64url'); // URL-safe Base64 encoding
  }
  
  const urlSafeToken = generateUrlSafeToken();

  const update_query = `INSERT IGNORE INTO email_update SET email = "${req.body.liame}", token = "${urlSafeToken}";`;

  connection.query(update_query, (error) => {

    if (error) {
      Error(res, error, error);
      return;
    };

    const body = `${req.body.liame}`;
    const html = `<html>
<head>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Nothing+You+Could+Do&display=swap" rel="stylesheet">
<style>
body {
font-family: Verdana, Arial, sans-serif;
font-size: 1em;
}
.header {
  background-color: black;
  padding: 10px;
}
.title {
  font-size: 3.5em;
  font-family: 'Nothing You Could Do', cursive;
  line-height: normal;
}
a {
  text-decoration: none;
}
.footer {
  background-color: #8a8;
  padding: 10px;
}
</style>
</head>
<body>
<div class="header">
<span class="title"> <a href="https://adventurecabaret.com"><span style="color:#674ea7;">A</span><span style="color:#6aa84f;">d<span><span style="color:#e06666;">v<span><span style="color:#ffd966;">e<span><span style="color:#3c78d8;">n<span><span style="color:#38761;">t<span><span style="color:#a64d78;">u<span><span style="color:#dd7e6b;">r<span><span style="color:#a4c2f4;">e<span> <span style="color:#cd4025;">C</span><span style="color:#fff;">abaret</span></a></span>
</div>
<h2>Thank you</h2>
<p>Thank you for signing up for updates on performances and further development of Adventure Cabaret.</p>
<p>Our goal is to create live theater productions that are illuminating and transformative.</p>
<p>We have big plans for the production, and we look forward to seeing you soon at one of our shows.</p>
<p><a href="https://adventurecabaret.com">https://adventurecabaret.com</a></p>
<br>
<div class="footer">
</div>
</body>
</html>`;

    try {
      sendEmail(req.body.liame, 'Adventure Cabaret: Thank you for signing up to receive updates', body, html);
    } catch (error) {
      console.error('Error sending email:', error);
    }

    const { header, footer } = require('../components');
    const content = `<h1>Thank you</h1>
<p>Thank you for signing up for updates on performances of Adventure Cabaret.</p>
<p>You won't hear from us often, but we'll try to make it great every time.</p>
<div class="bottom_padding"></div>`;

    res.send(`${header('Email update signup')}
${content}
${footer}`);

  });

  connection.end();

}

*/

module.exports = Email;