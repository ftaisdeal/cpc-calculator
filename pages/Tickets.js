const Tickets = async function (res) {

  const { header, footer } = require('../components');

  const content = `<h1>Tickets</h1>

<p>Adventure Cabaret goes into full production in mid-January 2025.</p>

<p>Please check back about tickets in early January.  Thank you.</p>`;

  res.send(`${header('Tickets for Adventure Cabaret')}
${content}
${footer}`);

}

module.exports = Tickets;