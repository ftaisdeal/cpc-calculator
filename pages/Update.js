const Update = async function (res) {

  const { header, footer } = require('../components');

  const content = `<h3>Update on the Production</h3>
<i>Update: Monday, October 31,2024</i>
<p>
<ol>
<li>The show has been strongly revised based on our experience with the pilot production last year.</li>
<li>Many new elements have been added to the show.</li>
<li>We are almost done with casting the full production version of the show. Only one role remains to be cast.</li>
<li>The new actors are absolutely great and we are very thrilled to be working with them.</li>
<li>In person rehearsals begin in November.</li>
<li>We have contracted with Phoenix Theater in San Francisco for both rehearsals and performances. We are excited about working with Phoenix because we will be able to rehearse in the same space in which we will perform, which is a huge advantage.</li>
<li>Early preview performances are planned for mid-January.</li>
</ol>`;

  res.send(`${header('Update on the Production')}
${content}
${footer}`);

}

module.exports = Update;