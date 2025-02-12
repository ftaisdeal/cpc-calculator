let isProcessing = false; // Set processing flag to false to avoid multiple processes

const SendUpdate = (req, res) => {

    const { header, footer } = require('../components');

    const content = `<h1>Email Update</h1>`;
  
    res.send(`${header('Error 404')}
  ${content}
  </body>
  </html>`);

  const EmailTemplate = require('./EmailTemplate');
  const sendEmail = require('../functions/sendEmail');
  const mysql = require('mysql2/promise'); // Use promise-based MySQL
  const db_config = require('./db_config');
  const connection = mysql.createPool(db_config); // Use a connection pool

  let table = '';
  if (req.body.list == 'cast') {
    table = 'cast';
  } else {
    table = 'email_update';
  }

  async function resetFailedEmails() { // Reset for sending new batch of messages 
    try {
        await connection.execute(`UPDATE ${table} SET sent = 0 WHERE sent = 1`);
        console.log("All records set to sendable.");
    } catch (error) {
        console.error("Error resetting failed emails:", error);
    }
  }
  
  resetFailedEmails();

  async function fetchUnsentEmails() {
      try {
          const [rows] = await connection.execute(
              `SELECT id, email FROM ${table} WHERE sent = 0 ORDER BY id ASC`
          );
          return rows;
      } catch (error) {
          console.error("Error fetching unsent emails:", error);
          return [];
      }
  }
  
  async function markAsSent(id) {
      try {
          await connection.execute(`UPDATE ${table} SET sent = 1 WHERE id = ?`, [id]);
      } catch (error) {
          console.error("Error marking email as sent:", error);
      }
  }

  let isRunning = false;
  
  async function processEmails(res) {

    if (isRunning) {
        return res.json({ status: "Already running" });
    }
    isRunning = true;

    const emails = await fetchUnsentEmails();
    if (emails.length === 0) {
        isRunning = false;
        return res.json({ status: "No more emails to send." });
    }

    let sentEmails = [];
    let failedEmails = [];

    for (const email of emails) {
        try {
            const html = EmailTemplate(email.first_name);
            const body = "Your update message";

            console.log(`Sending email to: ${email.email}`);
            //await sendEmail(email.email, 'Adventure Cabaret: Update', body, html);
            await markAsSent(email.id);
            console.log(`Email sent to: ${email.email}`);
            sentEmails.push(email.email);
        } catch (error) {
            console.error(`Failed to send email to ${email.email}:`, error);
            failedEmails.push(email.email);
        }

        await new Promise(resolve => setTimeout(resolve, 1000)); // 1-second delay
    }

    isRunning = false;

    return res.json({
        status: "Emails processed",
        sentEmails,
        failedEmails
    });
}  
  if (!isProcessing) { // Prevent overlap of processes
    isProcessing = true;
    processEmails();
  }

};
  
module.exports = SendUpdate;