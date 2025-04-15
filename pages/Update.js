const Update = async function (res) {

  const { header, footer } = require('../components');

  const content = `<h3>Update on the Production</h3>
<i>Update: Tuesday, April 15, 2025</i>
<p>
<ol>
<li>We have temporarily paused performing in order to concentrate on creating an extraordinary lighting design and lighting sequences, to add many enhancements to the multimedia aspects of the show, and also to practice with the UFO drone with flashing LEDs that flies around the theater and has become a character in its own right.</li>
<li>The reviews of the first performance are beginning to arrive, and are wonderfully positive.</li>
<li>We now have ads running on Facebook and Instagram, and are getting good results. One result is very surprising, but tells us a lot. There is one ad that performs much better than all the others, and that ad features a large purple Linky Pinky hand, and also the sentence "Materialism is for morons." We will continue experimenting broadly with different kinds of ads, including those with challenging content.</li>
<li>We had a tremendously successful opening night on March 1, with a sold out show, a great performance and an appreciative and enthusiastic audience.</li>
<li><a href="/tickets">Tickets are available for a second performance on April 5th</a>.</li>
<li>The second performance is at <a href="https://www.phoenixtheatresf.org/" target="__blank">Phoenix Theater</a> in San Francisco's theater district.</li>
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