const Origins = async function (res) {

  const { header, footer } = require('../components');

  const content = `<h1>Media Kit</h1>
  <ol>
  <li>Description</li>
  <li>Miranda Sorventi bio</li>
  <li>Press release</li>
  <li>Excerpts</li>
  <li>Marketing graphics</li>
  <li>Rehearsal &amp; performance pictures &amp; video</li>
 </ol>`;

  res.send(`${header('Media Kit for Adventure Cabaret')}
${content}
${footer}`);

}

module.exports = Origins;