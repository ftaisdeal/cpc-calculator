const Home = async function (res) {

  const { header, footer } = require('../components');

  const content = `<h1>Contact</h1>`;

  res.send(`${header('Adventure Cabaret')}
${content}
${footer}`);

}

module.exports = Home;