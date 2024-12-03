const Update = async function (res) {

  const { header, footer } = require('../components');

  const content = `<h3>Update on the Production</h3>
<i>Update: Monday, October 21,2024</i>
<p>
<ol>
<li>The show has been strongly revised based on our experience with the pilot production last year.</li>
<li>Many new elements have been added to the show.</li>
<li>We are done with casting the full production version of the show, and now also have backup casting in place.</li>
<li>The new actors are absolutely great and we are very thrilled to be working with them.</li>
<li>We are in preliminary rehearsals at Phoenix Theater in San Francisco's theater district.</li>
<li>We are planning to open at Theater 33, 533 Sutter St., a great 100-seat theater, in early March.</li>
<li>We will be holding a number of public rehearsals at Phoenix Theater, the first of which is on Sunday, December 8, 10am-2pm. <a href="https://www.eventbrite.com/e/adventure-cabaret-public-rehearsal-tickets-1097685259159">Free tickets are available here</a>.</li>
</ol>`;

  res.send(`${header('Update on the Production')}
${content}
${footer}`);

}

module.exports = Update;