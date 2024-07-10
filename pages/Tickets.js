const Tickets = async function (res) {

  const { header, footer } = require('../components');

  const content = `<h1>Tickets</h1>

<p>No full performances of Adventure Cabaret are currently scheduled, but we will be resuming production soon.</p>
      
<br>
<br>`;

  res.send(`${header('Tickets for Adventure Cabaret')}
${content}
${footer}`);

}

module.exports = Tickets;