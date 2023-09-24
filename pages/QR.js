const Home = async function (res) {

  const { header, footer } = require('../components');

  const content = `<h1>Mr. QR sez</h1>
<p>Hey, thanks for scanning me.</p>
<p>That felt really good.</p>
<p>Do you want me to scan you back?</p>
<p>Let's be friends!</p>
<p><span style="font-size: 4em;">🤠</span></p>
<p>I hope you enjoy the show!</p>`;

  res.send(`${header('Thanks for scanning me!')}
${content}
${footer}`);

}

module.exports = Home;