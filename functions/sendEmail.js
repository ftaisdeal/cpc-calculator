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

  try {
    let info = await transporter.sendMail({
      from: 'contact@adventurecabaret.com',
      to: email,
      subject: subject,
      text: body,
      html: html,
    });

    console.log("Message sent: %s", info.messageId);
  } catch (error) {
    console.error("Error sending email:", error);
  }

  return;

}

module.exports = sendEmail;