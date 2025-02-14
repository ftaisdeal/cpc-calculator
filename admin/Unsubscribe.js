const Unsubscribe = async (req, res) => {

  const { header, footer } = require('../components');
  const Error = require('./pages/Error');
  const mysql = require('mysql');
  const db_config = require('../admin/db_config');
  const connection = mysql.createConnection(db_config);
  const token = req.query.token;

  const update_query = `UPDATE email_update SET first_name = "unsubcribed" WHERE token = "${token}";`;

  connection.query(update_query, (error) => {

    if (error) {
      Error(res, error, error);
      return;
    };

  });

  const content = `<h4>You have unsubscribed from our email list</h4>
If you would like to resubscribe at any time, please visit our website:</p>
<p><a href="https://adventurecabaret.com">https://adventurecabaret.com</a></p>
<p>Thank you.</p>
<br>
<br>
<br>
<br>`;

res.send(`${header('Email unsubscribed')}
${content}
${footer}`);

}

module.exports = Unsubscribe;