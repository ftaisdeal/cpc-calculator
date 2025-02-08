const SendUpdate = function (req, res) {

  const mysql = require('mysql');
  const dbConfig = require('./db_config');
  const sendEmail = require('../functions/sendEmail');
  const Error = require('./Error');
  
  let sentEmails = [];  
  
  const body = "Body of email message.";
  const html = `<html>
  <head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Nothing+You+Could+Do&display=swap" rel="stylesheet">
    <style>
      body { font-family: Verdana, Arial, sans-serif; font-size: 1em; }
      .header { background-color: black; padding: 10px; }
      .title { font-size: 3.5em; font-family: 'Nothing You Could Do', cursive; }
      .footer { background-color: #8a8; padding: 10px; }
    </style>
  </head>
  <body>
    <div class="header">
      <span class="title"><a href="https://adventurecabaret.com" style="color:#fff;">Adventure Cabaret</a></span>
    </div>
    <h1>Thank you</h1>
    <p>This is an update about Adventure Cabaret.</p>
    <p><a href="https://adventurecabaret.com">https://adventurecabaret.com</a></p>
    <div class="footer"></div>
  </body>
  </html>`;

  Error(res, "Thank you.", "Thanks for joining our email list.");
  return;
  
  async function fetchUnsentEmails() {
    let connection;
    try {
        connection = await mysql.createConnection(dbConfig);
        const [rows] = await connection.execute(
            "SELECT id, email FROM email_update_test WHERE sent = 0 ORDER BY id ASC LIMIT 10"
        );
        return rows;
    } catch (error) {
        console.error("Error fetching unsent emails:", error);
        return [];
    } finally {
        if (connection) await connection.end();
    }
}

async function processEmails() {
    while (true) {
        const emails = await fetchUnsentEmails();
        if (emails.length === 0) {
            console.log("No more emails to send. Waiting...");
            await new Promise(resolve => setTimeout(resolve, 5000));
            continue;
        }

        for (const email of emails) {
            try {
                console.log(`Sending email to: ${email.email}`);
                await sendEmail(email.email, 'Adventure Cabaret: Update', body, html);
                await markAsSent(email.id);
                sentEmails.push(email.email);
                if (sentEmails.length > 100) sentEmails.shift();
                console.log(`Email sent to: ${email.email}`);
            } catch (error) {
                console.error(`Failed to send email to ${email.email}:`, error);
            }
            await new Promise(resolve => setTimeout(resolve, 1000));
        }
    }
}

processEmails().catch(console.error);

}

module.exports = SendUpdate;