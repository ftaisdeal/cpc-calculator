const Admin = async function (res) {

  const { header, footer } = require('../components');

  const content = `<h1>Admin</h1>`;

  res.send(`${header('Admin')}
${content}
${footer}`);

}

module.exports = Admin;