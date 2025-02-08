const express = require('express');
const mysql = require('mysql2/promise');
const dbConfig = require('./db_config');
const sendEmail = require('../functions/sendEmail');

const app = express();
const PORT = 3000;
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

async function markAsSent(id) {
    let connection;
    try {
        connection = await mysql.createConnection(dbConfig);
        await connection.execute("UPDATE email_update_test SET sent = 1 WHERE id = ?", [id]);
    } catch (error) {
        console.error("Error marking email as sent:", error);
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

app.get('/sent-emails', async (req, res) => {
    try {
        const connection = await mysql.createConnection(dbConfig);
        const [rows] = await connection.execute("SELECT email FROM email_update_test WHERE sent = 1 ORDER BY id DESC LIMIT 100");
        await connection.end();
        res.json(rows.map(row => row.email));
    } catch (error) {
        console.error("Error fetching sent emails:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));

module.exports = SendBatchEmail;
