const fs = require('fs');
const csv = require('csv-parser');
const crypto = require('crypto');

// Function to generate a random token
const generateToken = () => {
  return crypto.randomBytes(16).toString('hex');
};

// Function to generate a SQL insert statement
const generateSQL = (firstName, email, token) => {
  return `INSERT INTO email_update (first_name, email, token) VALUES ('${firstName}', '${email}', '${token}');\n`;
};

// Main function to process the CSV file and generate SQL statements
const processCSV = async (filePath) => {
  const writeStream = fs.createWriteStream('EmailsAdd.sql');
  const emailSet = new Set();

  fs.createReadStream(filePath)
    .pipe(csv())
    .on('data', (row) => {
      const firstName = row['Attendee first name'];
      const email = row['Attendee email'];
      if (firstName && email && !emailSet.has(email)) {
        emailSet.add(email);
        const token = generateToken();
        const sql = generateSQL(firstName, email, token);
        writeStream.write(sql);
        console.log(`Generated SQL: ${sql}`);
      }
    })
    .on('end', () => {
      console.log('CSV file successfully processed');
      writeStream.end();
    });
};

processCSV('/Users/firinn/Desktop/AC/website/admin/EmailsAdd.csv');