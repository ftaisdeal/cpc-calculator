const EmailTracking = async (req, res) => {

  const token = req.query.token;

  if (token) {
    const mysql = require('mysql2/promise');
    const db_config = require('./db_config');
    const connection = await mysql.createPool(db_config);

    try {
      // Read the current open_count value
      const [rows] = await connection.query(`SELECT open_count FROM email_update WHERE token="${token}";`);
      if (rows.length === 0) {
        res.status(404).send('Token not found.');
        return;
      }

      const open_count = rows[0].open_count;

      // Update the open_count value and last_opened timestamp
      const update_query = `UPDATE email_update SET open_count = ${open_count + 1}, last_opened = CURRENT_TIMESTAMP WHERE token="${token}";`;
      await connection.query(update_query);

    } catch (error) {
      console.error('Database error:', error);
      res.status(500).send('An error occurred while processing your request.');
      return;
    }

    const img = Buffer.from( // Return a 1x1 transparent pixel
      'R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==',
      'base64'
    );

    res.writeHead(200, {
      'Content-Type': 'image/gif',
      'Content-Length': img.length
    });
    res.end(img);
  } else {
    res.status(400).send('Token parameter is required.');
  }

}

module.exports = EmailTracking;