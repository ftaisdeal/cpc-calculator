const mysql = require('mysql2');
const nodemailer = require('nodemailer');

// Create a MySQL connection
const db_config = require('../admin/db_config');
const connection = mysql.createConnection(db_config);

// Create a nodemailer transporter
  let transporter = nodemailer.createTransport({
    host: "premium78.web-hosting.com",
    port: 465,
    secure: true,
    auth: {
      user: 'firinn@adventurecabaret.com',
      pass: 'Edelheit!2024'
    },
  });

// Function to send email
const sendEmail = (emailDetails) => {
  const mailOptions = {
    from: 'firinn@adventurecabaret.com',
    to: emailDetails.recipient,
    subject: emailDetails.subject,
    text: emailDetails.body,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error sending email:', error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
};

// Function to process email sending with rate limiting
const processEmails = () => {
  connection.query('SELECT * FROM email_update WHERE sent = 0 LIMIT 1', (err, results) => {
    if (err) {
      console.log('Error fetching email:', err);
      return;
    }

    if (results.length > 0) {
      const emailDetails = results[0];

      // Send the email
      sendEmail(emailDetails);

      // Mark the email as sent in the database
      connection.query('UPDATE email_update SET sent = 1 WHERE id = ?', [emailDetails.id], (err) => {
        if (err) {
          console.log('Error updating email status:', err);
        } else {
          console.log(`Email to ${emailDetails.recipient} sent and marked as sent in database.`);
        }
      });
    }
  });
};

// Set up an interval to send one email per second
setInterval(processEmails, 1000);
