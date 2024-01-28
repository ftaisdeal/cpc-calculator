const Tickets = async function (res) {

  const { header, footer } = require('../components');

  const content = `<h1>Tickets</h1>

<b><a href="https://lu.ma/ab87i67h" target="__blank">Saturday, February 10, 2024</a></b><br>
7:00PM<br>
International House - Chevron Auditorium<br>
2299 Piedmont Ave.<br>
Berkeley, CA
<p>
Please enter your coupon code in UPPER CASE.
<p>
<iframe
  src="https://lu.ma/embed-checkout/evt-fPZaxiF5o8H1H95"
  width="500"
  height="860"
  frameborder="0"
  style="border: 1px solid #bfcbda88; border-radius: 4px;"
  allowfullscreen=""
  aria-hidden="false"
  tabindex="0"
></iframe>`;

  res.send(`${header('Tickets for Adventure Cabaret')}
${content}
${footer}`);

}

module.exports = Tickets;