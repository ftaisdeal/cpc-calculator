const SendUpdate = function (req, res) {

    //const { header, footer } = require('../components');
    const EmailTemplate = require('./EmailTemplate');
    const Error = require('../pages/Error');
    const sendEmail = require('../functions/sendEmail');
    const mysql = require('mysql');
    const db_config = require('../admin/db_config');
    const connection = mysql.createConnection(db_config);

    async function fetchUnsentEmails() {
      let connection;
      try {
          connection = await mysql.createConnection(dbConfig);
          const [rows] = await connection.execute(
              "SELECT id, email FROM email_update_test WHERE sent = 0 ORDER BY id ASC LIMIT 1"
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
                html = EmailTemplate(email.first_name);
                console.log(`Sending email to: ${email.email}`);
                await sendEmail(email.email, 'Adventure Cabaret: Update', body, html);
                await markAsSent(email.id);
                sentEmails.push(email.email);
                if (sentEmails.length > 200) sentEmails.shift();
                console.log(`Email sent to: ${email.email}`);
                res.send(email.email);
            } catch (error) {
                console.error(`Failed to send email to ${email.email}:`, error);
            }
            await new Promise(resolve => setTimeout(resolve, 1000));
        }
    }
}

processEmails().catch(console.error);
  
/*    const update_query = `SELECT email FROM email_update LIMIT 1;`;
  
    connection.query(update_query, (error) => {
  
      if (error) {
        Error(res, error, error);
        return;
      };
  
      const body = `${req.body.liame}`;
      const html = EmailTemplate('Firinn');
  
      try {
        sendEmail('firinn@adventurecabaret.com', 'Adventure Cabaret: Thank you for signing up to receive updates', body, html);
      } catch (error) {
        console.error('Error sending email:', error);
      }
  
      const content = `Email sent: `;
  
      res.send(`${header('Email sent')}
  ${content}
  ${footer}`);
});

*/
  
    connection.end();

}

module.exports = SendUpdate;