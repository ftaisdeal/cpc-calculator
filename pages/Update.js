const Update = async function (res) {

  const { header, footer } = require('../components');

  const content = `<h3>Update on the Production</h3>
<i>Update: Friday, March 21, 2025</i>
<p>
<ol>
<li>The reviews of the first performance are beginning to arrive, and are wonderfully positive. Here is an example:
<p>"This play seamlessly blended drama and humor, delivering an inspiring and thought-provoking experience as well as a message that leaves a lasting impact on the audience."</p>
<p style="padding-left: 20px;">&mdash;Shelly H., from Oakland</p></li>
<li>We now have ads running on Facebook and Instagram, and are getting good results. One result is very surprising, but tells us a lot. One ad performs much better than all the others. That ad features a large purple Linky Pinky hand, and also the sentence "Materialism is for morons." We will continue experimenting broadly with different kinds of ads, including those with challenging content.</li>
<li>We had a tremendously successful opening night on March 1, with a sold out show, a great performance and an appreciative and enthusiastic audience.</li>
<li><a href="/tickets">Tickets are available for a second performance on March 22nd</a>.</li>
<li>The second performance is at <a href="https://www.phoenixtheatresf.org/" target="__blank">Phoenix Theater</a> in San Francisco's theater district.</li>
<li>We will be moving over to <a href="https://www.theater33.com/" target="__blank">Theater 33</a>, at 533 Sutter Street, for a performance on April 5th.</li>
<li>We are now working with a lighting designer, Beth Cockrell, who will be designing the lighting for future performances.</li>
<li>Many enhancements are being added to the multimedia assets for the show.</li>
<li>We have added some choreography with flashlights to the open of the show.</li>
<li>We have begun special training for the cast in order to become a "power team" of actors.</li>
</ol>
<br>
<img src="images/hand-print.png" width="400" height="488" alt="purple hand print">`;

  res.send(`${header('Update on the Production')}
${content}
${footer}`);

}

module.exports = Update;