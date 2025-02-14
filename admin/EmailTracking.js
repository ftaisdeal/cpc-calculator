const EmailTracking = async (req, res) => {

  const token = req.query.token;

  if (token) {
    const mysql = require('mysql2/promise');
    const db_config = require('./db_config');
    const connection = await mysql.createPool(db_config);

    const update_query = `UPDATE email_update SET last_opened = CURRENT_TIMESTAMP WHERE token="${token}";`;

    try {
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