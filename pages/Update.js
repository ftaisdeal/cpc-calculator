const Update = async function (res) {

  const { header, footer } = require('../components');

  const content = `<h3>Update on the Production</h3>
<ol>
<li>We are now developing new material through our sister site, <a href="https://storytelling.social" target="__blank">Storytelling Social</a>.</li>
<li>The first storytelling event through Storytelling Social is now scheduled for Tuesday, March 5, 7:30-9:00pm.</li>
<li>We will also use the <a href="https://storytelling.social" target="__blank">Storytelling Social</a> site for cross-promotion.
<li>We've added an <a href="https://www.instagram.com/adventurecabaret" target="__blank">Instagram account</a>.
<li>The production is being recast from scratch.</li>
<li>The show will open in previews of segments from the show, a roughly 50/50 mix of live acting and multimedia.</li>
<li>The venues will all be in San Francisco.</li>
<li>These limited previews will be only 30-45 minutes long, only involve three actors, and will take place in small, intimate venues such as dance and yoga studios.</li>
<li>Maximum seating will be only about 20.</li>
<li>We have purchased a video projector so that we can perform the show in almost any space.</li>
<li>We will have complete control of theatrical lighting, including dimmability, color control and special effects such as strobe and "police lights" in nearly any space we choose through a lighting kit that is controllable from a laptotp or phone over WiFi or Bluetooth.</li>
</ol>

<h3>Venues</h3>
<ol>
<li><a href="https://local.yahoo.com/info-234557018-dance-studio-danzarte-by-dance-match-san-francisco" target="__blank">Space DanzArte</a>
</li>

<li><a href="https://giggster.com/listing/2-000-sq-ft-studio-with-pyramid-skylight" target="__blank">Fisher Studio</a></li>
</ol>`;

  res.send(`${header('Update on the Production')}
${content}
${footer}`);

}

module.exports = Update;