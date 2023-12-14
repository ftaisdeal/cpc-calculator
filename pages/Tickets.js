const Tickets = async function (res) {

  const { header, footer } = require('../components');

  const content = `<h1>Tickets</h1>
<b><a href="https://www.eventbrite.com/e/adventure-cabaret-tickets-714765271167" target="__blank">Tuesday, January 30, 2024</a></b><br>
7:00PM<br>
Freight &amp; Salvage<br>
2020 Addison St.<br>
Berkeley, CA
<p>
<b><a href="" target="__blank">Saturday, February 10, 2024</a></b><br>
7:00PM<br>
International House - Chevron Auditorium<br>
2299 Piedmont Ave.<br>
Berkeley, CA
<p>
<b><a href="" target="__blank">Saturday, February 24, 2024</a></b><br>
7:00PM<br>
International House - Chevron Auditorium<br>
2299 Piedmont Ave.<br>
Berkeley, CA
  `;

  res.send(`${header('Tickets for Adventure Cabaret')}
${content}
${footer}`);

}

module.exports = Tickets;