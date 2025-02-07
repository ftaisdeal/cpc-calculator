const express = require('express');
const app = express();
const PORT = 3000;

const mysql = require('mysql2');
const dbConfig = require('./db_config');
const mysql = require('mysql2/promise');

const nodemailer = require('nodemailer');

let sentEmails = [];  // Store sent email addresses in memory
  
// Create a nodemailer transporter
let transporter = nodemailer.createTransport({
  host: "premium78.web-hosting.com",
  port: 465,
  secure: true,
  auth: {
    user: 'firinn@adventurecabaret.com',
    pass: 'Edelheit!2024'
  },
})

// Fetch unsent emails from the database
async function fetchUnsentEmails() {
    const connection = await mysql.createConnection(dbConfig);
    const [rows] = await connection.execute("SELECT id, email, first_name FROM email_update WHERE sent = 0 ORDER BY id ASC");
    await connection.end();
    return rows;
}

// Send an email
async function sendEmail(email, firstName) {
    const subject = "Important Update";
    const body = firstName 
        ? `Hi ${firstName},\n\nThis is a personalized message for you.` 
        : `Hello,\n\nThis is a general message.`;

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: subject,
        text: body
    };

    await transporter.sendMail(mailOptions);
}

// Mark an email as sent in the database
async function markAsSent(id) {
    const connection = await mysql.createConnection(dbConfig);
    await connection.execute("UPDATE emails SET sent = 1 WHERE id = ?", [id]);
    await connection.end();
}

// Process emails and send one per second
async function processEmails() {
    const emails = await fetchUnsentEmails();
    for (const email of emails) {
        try {
            console.log(`Sending email to: ${email.email}`);
            await sendEmail(email.email, email.first_name);
            await markAsSent(email.id);
            sentEmails.push(email.email); // Store in sent emails list
            console.log(`Email sent to: ${email.email}`);
        } catch (error) {
            console.error(`Failed to send email to ${email.email}:`, error);
        }
        await new Promise(resolve => setTimeout(resolve, 1000)); // Throttle rate: 1 email per second
    }
    console.log("All emails processed.");
}

// Start email processing on server start
processEmails().catch(console.error);

// Serve an admin page with sent emails
app.get('/', (req, res) => {
    res.send(`
        <html>
            <head>
                <title>Email Sending Progress</title>
                <script>
                    function fetchEmails() {
                        fetch('/sent-emails')
                            .then(response => response.json())
                            .then(data => {
                                document.getElementById('email-list').innerHTML = data.map(email => '<li>' + email + '</li>').join('');
                            });
                    }
                    setInterval(fetchEmails, 1000); // Refresh every second
                </script>
            </head>
            <body>
                <h1>Sent Emails</h1>
                <ul id="email-list"></ul>
            </body>
        </html>
    `);
});

// API endpoint to get sent emails
app.get('/sent-emails', (req, res) => {
    res.json(sentEmails);
});

// Start Express server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});