const Update = async function (res) {

  const { header, footer } = require('../components');

  const content = `<h3>Update on the Production</h3>
<i>Update: Saturday, December 21,2024</i>
<p>
<ol>
<li>Tickets are now on sale for <a href="/tickets">opening night on March 1, 2025</a>.</li>
<li>The show has been strongly revised based on our experience with the pilot production last year.</li>
<li>Many new elements have been added to the show.</li>
<li>We are almost done with casting the full production version of the show, and will soon also have backup casting in place.</li>
<li>The new actors are absolutely great and we are very thrilled to be working with them.</li>
<li>We are in rehearsals at Phoenix Theater in San Francisco's theater district.</li>
</ol>`;

  res.send(`${header('Update on the Production')}
${content}
${footer}`);

}

module.exports = Update;