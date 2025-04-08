const Tickets = async function (res) {

  const { header, footer } = require('../components');

  const content = `<div class="review">
"Adventure Cabaret delivered a highly original, entertaining, and pithy show that courageously addressed important global issues confronting humanity today—with heart, soul, humor, and imagination."
<div class="review-name">&mdash; Adam M., from San Francisco</div>
</div>

<h1>Tickets</h1>
No performance scheduled at this time.
<p>We plan to resume performances in late April.</p>
<br>
<iframe width="560" height="315" src="https://www.youtube.com/embed/2EeoC8HxMnM?si=SyvCFCK9zTik5A1c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<br>
<br>
<br>`;

  res.send(`${header('Tickets for Adventure Cabaret')}
${content}
${footer}`);

}

module.exports = Tickets;