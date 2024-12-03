const Tickets = async function (res) {

  const { header, footer } = require('../components');

  const content = `<h1>Tickets</h1>

<p>Adventure Cabaret goes into full production rehearsals in January 2025.</p>

<p>Please check back about tickets in early January for an opening probably in the first weeks of March.</p>

<p>In the mean time, we are holding a small number of public rehearsals at Phoenix Theater in San Francisco's theater district, the first of which is on Sunday, December 8, 10am-2pm. Free tickets are available <a href="https://www.eventbrite.com/e/adventure-cabaret-public-rehearsal-tickets-1097685259159">here</a>.</p>`;

  res.send(`${header('Tickets for Adventure Cabaret')}
${content}
${footer}`);

}

module.exports = Tickets;