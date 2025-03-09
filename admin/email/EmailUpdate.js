let isProcessing = false; // Set processing flag to false to avoid multiple processes

const SendUpdate = async (req, res) => {
    const Error = require('../../pages/Error');
    const EmailTemplateSubscribers = require('./EmailTemplateSubscribers');
    const EmailTemplateCast = require('./EmailTemplateCast');
    const EmailTemplateAudience = require('./EmailTemplateAudience');
    const sendEmail = require('../../functions/sendEmail');
    const mysql = require('mysql2/promise'); // Use promise-based MySQL
    const db_config = require('../db_config');
    const connection = mysql.createPool(db_config); // Use a connection pool

    if (!req.body.admin || req.body.admin !== 'firinn') {
        return Error(res, 'Unauthorized', 'You are not authorized to access this page.');
    }

    let table = '';
    let query = '';

    if (req.body.list == 'cast') {
        table = 'cast';
        query = 'SELECT id, first_name, email FROM cast WHERE sent = 0 ORDER BY id ASC';
    } else if (req.body.list == 'audience') {
        table = 'audience';
        query = 'SELECT id, first_name, email FROM audience WHERE sent = 0 ORDER BY id ASC';
    } else {
        table = 'email_update';
        query = 'SELECT id, first_name, email, token FROM email_update WHERE sent = 0 ORDER BY id ASC';
    }

    async function resetFailedEmails() { // Reset for sending new batch of messages 
        try {
            await connection.execute(`UPDATE ${table} SET sent = 0 WHERE sent = 1`);
            console.log("All records set to sendable.");
        } catch (error) {
            console.error("Error resetting failed emails:", error);
        }
    }

    await resetFailedEmails();

    async function fetchUnsentEmails() {
        try {
            const [rows] = await connection.execute(query);
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
                let subject, text, html;

                if (req.body.list === 'cast') {
                    ({ subject, text, html } = EmailTemplateCast(email.first_name));
                } else if (req.body.list === 'audience') {
                    ({ subject, text, html } = EmailTemplateAudience(email.first_name));
                } else {
                    ({ subject, text, html } = EmailTemplateSubscribers(email.first_name, email.token));
                }

                console.log(`Sending email to: ${email.email}`);
                await sendEmail(email.email, subject, text, html);
                await markAsSent(email.id);
                sentEmails.push(email.email);
            } catch (error) {
                console.error(`Failed to send email to ${email.email}:`, error);
                failedEmails.push(email.email);
            }

            await new Promise(resolve => setTimeout(resolve, 1000)); // 1-second delay
        }

        isRunning = false; // Reset the running flag
        isProcessing = false; // Reset the processing flag

        return res.json({
            status: "Emails processed",
            sentEmails,
            failedEmails
        });
    }

    if (!isProcessing) { // Prevent overlap of processes
        isProcessing = true;
        processEmails(res); // Pass the res parameter to processEmails
    } else {
        return res.json({ status: "Process already running" });
    }
};

module.exports = SendUpdate;