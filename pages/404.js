const Home = async function (res) {

  const { header, footer } = require('../components');

  const content = `<h1>Error 404</h1>
<p>Page not found</p>`;

  res.send(`${header('Error 404')}
${content}
${footer}`);

}

module.exports = Home;