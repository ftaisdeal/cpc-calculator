const Update = async function (res) {

  const { header, footer } = require('../components');

  const content = `<h3>Update on the Production</h3>
<i>Update: Sunday, January 19, 2025</i>
<p>
<ol>
<li>Tickets are now on sale for <a href="/tickets">opening night on March 1, 2025</a>.</li>
<li>We are opening at <a href="https://www.phoenixtheatresf.org/" target="__blank">Phoenix Theater</a> in San Francisco's theater district.</li>
<li>We will be having a <a href="https://www.eventbrite.com/e/adventure-cabaret-picnic-rehearsal-in-dolores-park-tickets-1225652281969" target="__blank">public picnic in Dolores Park on March 2</a>, the day after the first performance, from 12-4pm. Feel free to join us.</li>
<li>The show has been strongly revised based on our experience with the pilot production last year.</li>
<li>Many new elements have been added to the show.</li>
<li>We are done with casting the full production version of the show, and will soon also have backup casting in place.</li>
<li>The new actors are absolutely great and we are very thrilled to be working with them.</li>
</ol>
<br>
<img src="images/hand-print.png" width="400" height="488" alt="purple hand print">`;

  res.send(`${header('Update on the Production')}
${content}
${footer}`);

}

module.exports = Update;