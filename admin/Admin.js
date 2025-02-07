const Admin = async function (res) {

  const { header, footer } = require('../components');

  const content = `<h1>Admin</h1>
<form action="">
<input type="submit" value="send message" />
</form>`;

  res.send(`${header('Admin')}
${content}
${footer}`);

}

module.exports = Admin;