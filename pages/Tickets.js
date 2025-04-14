const Tickets = async function (res) {

  const { header, footer } = require('../components');

  const content = `<div class="review">
"Adventure Cabaret delivered a highly original, entertaining, and pithy show that courageously addressed important global issues confronting humanity today—with heart, soul, humor, and imagination."
<div class="review-name">&mdash; Adam M., from San Francisco</div>
</div>

<h1>Tickets</h1>
No performances are currently scheduled. We plan to resume performances during the summer.
<br>
<br>
<br>`;

  res.send(`${header('Tickets for Adventure Cabaret')}
${content}
${footer}`);

}

module.exports = Tickets;