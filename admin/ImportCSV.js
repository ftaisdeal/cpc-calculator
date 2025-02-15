const fs = require('fs');
const csv = require('csv-parser');
const mysql = require('mysql2/promise');
const crypto = require('crypto');
const dbConfig = require('./db_config');

// Function to generate a random token
const generateToken = () => {
  return crypto.randomBytes(16).toString('hex');
};

// Function to insert a record into the database
const insertRecord = async (connection, firstName, email, token) => {
  const query = 'INSERT INTO email_update (first_name, email, token) VALUES (?, ?, ?)';
  await connection.execute(query, [firstName, email, token]);
};

// Main function to process the CSV file and insert records into the database
const processCSV = async (filePath) => {
  const connection = await mysql.createConnection(dbConfig);

  fs.createReadStream(filePath)
    .pipe(csv())
    .on('data', async (row) => {
      const firstName = row['Attendee first name'];
      const email = row['Attendee email'];
      const token = generateToken();
      try {
        await insertRecord(connection, firstName, email, token);
        console.log(`Inserted: ${firstName}, ${email}, ${token}`);
      } catch (error) {
        console.error('Error inserting record:', error);
      }
    })
    .on('end', () => {
      console.log('CSV file successfully processed');
      connection.end();
    });
};

processCSV('/Users/firinn/Desktop/AC/website/admin/Eventbrite.csv');