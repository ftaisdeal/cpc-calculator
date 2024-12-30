const Origins = async function (res) {

  const { header, footer } = require('../components');

  const content = `<h1>Media Kit</h1>
  <ol>
  <li>Press release</li>
  <li>Marketing graphics</li>
  <li>Rehearsal pictures and video</li>
  <li>About</li>
  <li>Miranda Sorventi bio</li>
 </ol>`;

  res.send(`${header('Media Kit for Adventure Cabaret')}
${content}
${footer}`);

}

module.exports = Origins;