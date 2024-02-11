const Update = async function (res) {

  const { header, footer } = require('../components');

  const content = `<h1>Update</h1>
 
<h3>Update on the Production</h3>
<ol>
<li>The production is being recast from scratch.</li>
<li>The show will open in previews of segments from the show, a roughly 50/50 mix of live acting and multimedia.</li>
<li>These limited previews will be only 30-45 minutes long.</li>
<li>We have purchased a video projector so that we can perform the show in almost any space.</li>
<li>These performances will take place in small, intimate venues such as dance and yoga studios.</li>
<li>Maximum seating will be only about 20.</li>
<li>The venues will all be in San Francisco, not Berkeley.</li>
<li>These limited previews will only involve four actors.</li>
<li>I will be one of the actors.</li>
<li>In other words, we will have complete control of theatrical lighting, including color control, dimmability and special effects such as strobe and "police lights" in nearly any space we choose through a lighting kit that is controllable from a laptotp or phone over WiFi or Bluetooth..</li>
<li>A major marketing person is being brought on board. He has more than twenty years experience specifically in marketing live events.</li>
<li>An attorney is being brought on board to advise on contracts and negotiations with potential business partners and investors.</li>
<li>Cross-promotion is being initiated with a second project for live events, which is a combination of storytelling, socializing and a new media form I invented called a "quote movie."
</ol>

<h3>Venues</h3>
<ol>
<li><a hreft="https://local.yahoo.com/info-234557018-dance-studio-danzarte-by-dance-match-san-francisco" target="__blank">Space DanzArte</a>
</li>

<li><a href="https://giggster.com/listing/2-000-sq-ft-studio-with-pyramid-skylight" target="__blank">Fisher Studio</a></li>
</ol>`;

  res.send(`${header('Cast Resources')}
${content}
${footer}`);

}

module.exports = Update;