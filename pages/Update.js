const Update = async function (res) {

  const { header, footer } = require('../components');

  const content = `<h3>Update on the Production</h3>
<i>Updated: Wednesday, February 21, 2024</i>

<p>

<ol>
<li>We've added email signup to the website, so if you want to be kept informed proactively, please visit <a href="/">the home page</a> and enter your email address.</li>
<li>The production is being recast from scratch, which means that it will be a few months before we can open the show.</li>
<li>The show will open in previews of segments from the production, a roughly 50/50 mix of live acting and multimedia.</li>
<li>These previews will be used to further develop and refine the production, and you can be part of this process.</li>
<li>The venues will all be in San Francisco.</li>
<li>These limited previews will be only 30-45 minutes long, only involve three actors, and will take place in small, intimate venues such as dance and yoga studios.</li>
<li>Maximum seating will be only about 20.</li>
<li>We are now developing new material through our sister site, <a href="https://bit.ly/42PGVWj" target="__blank">Storytelling Social</a>.</li>
<li>The first storytelling event through Storytelling Social is now scheduled for Tuesday, March 5, 7:30-9:00pm.</li>
<li>We will also use the <a href="https://bit.ly/42PGVWj" target="__blank">Storytelling Social</a> site for cross-promotion.
<li>We've added an <a href="https://www.instagram.com/adventurecabaret" target="__blank">Instagram account</a>.
<li>We have purchased a video projector so that we can perform the show in almost any space.</li>
<li>We will have complete control of theatrical lighting, including dimmability, color control and special effects such as strobe and "police lights" in nearly any space we choose through a lighting kit that is controllable from a laptotp or phone over WiFi or Bluetooth.</li>
<li>A new media form called a "QuoteMovie" will be included in the production at various points. A QuoteMovie is a movie made only of quotes.  Despite consisting only of white words on a black screen, these movies have powerful psychological and emotional effects.  Here is <a href="https://youtu.be/qIbaMLyi0b8" target="_blank">a quick example</a>.</li>
</ol>`;

  res.send(`${header('Update on the Production')}
${content}
${footer}`);

}

module.exports = Update;