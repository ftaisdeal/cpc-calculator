const Home = async function (res) {

  const { header, footer } = require('../components');

  const content = `<h1>Upcoming Shows</h1>
<p>Tuesday, January 30, 2024 - 7:00-9:00pm</p>
<p>Freight &amp; Salvage<br>
2020 Addison Street<br>
Berkeley, CA 94704</p>
https://www.eventbrite.com/e/714765271167?aff=oddtdtcreator
<p>tickets</p>
<img src="images/bee.jpg" width="640" height="580" alt="bee">`;

  res.send(`${header('Adventure Cabaret')}
${content}
${footer}`);

}

module.exports = Home;