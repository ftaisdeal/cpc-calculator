const Update = async function (res) {

  const { header, footer } = require('../components');

  const content = `<h3>Update on the Production</h3>
<i>Update: Tuesday, March 4, 2025</i>
<p>
<ol>
<li>We had a tremendously successful opening night on March 1, with a sold out show, a great performance and an appreciative and enthusiastic audience.</li>
<li><a href="/tickets">Tickets are available for a second performance on March 22nd</a>.</li>
<li>The second performance is at <a href="https://www.phoenixtheatresf.org/" target="__blank">Phoenix Theater</a> in San Francisco's theater district.</li>
<li>We will be moving over to <a href="https://www.theater33.com/" target="__blank">Theater 33</a>, at 533 Sutter Street, for a performance on April 5th.</li>
<li>We are now working with a lighting designer, Beth Cockrell, who will be designing the lighting for future performances.</li>
<li>Many enhancements are being added to the multimedia assets for the show.</li>
<li>We have added some choreography with flashlights to the open of the show.</li>
<li>We have begun special training for the actors in order to become a "power team" of actors.</li>
</ol>
<br>
<img src="images/hand-print.png" width="400" height="488" alt="purple hand print">`;

  res.send(`${header('Update on the Production')}
${content}
${footer}`);

}

module.exports = Update;