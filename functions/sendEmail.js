"use strict";

const nodemailer = require("nodemailer");

async function sendEmail(email, subject, body, html) {

  let transporter = nodemailer.createTransport({
    host: "premium78.web-hosting.com",
    port: 465,
    secure: true,
    auth: {
      user: 'noreply@sustainablechoices.green',
      pass: 'alerts_are_important'
    },
  });

  let info = await transporter.sendMail({
    from: 'alerts@sustainablechoices.green',
    to: email,
    subject: subject,
    text: body,
    html: html,
  });

  console.log("Message sent: %s", info.messageId);

  return;

}

module.exports = sendEmail;