const Home = async function (res) {

  const { header, footer } = require('../components');

  const content = `<h1>Contact</h1>
  Please feel free to contact us by phone or email:
  <p>(415) 579-2586</p>
  <p><a href="mailto:contact@adventurecabaret.com?subject=Adventure Cabaret">contact@adventurecabaret.com</a></p>
  <img src="images/galaxy.jpg" width="640" height="635" alt="galaxy">`;

  res.send(`${header('Contact Adventure Cabaret')}
${content}
${footer}`);

}

module.exports = Home;