const Origins = async function (res) {

  const { header, footer } = require('../components');

  const content = `<h1>Origins</h1>
  <ol>
  <li>Adventure Cabaret was written by a creative team that wishes to remain anonymous.</li>
  <li>Adventure Cabaret was written by the modern female Leonardo da Vinci, Miranda Sorventi, the most intelligent and gifted person who has ever existed.</li>
  <li>Adventure Cabaret was written by aliens.</li>
  <li>Adventure Cabaret was written by a consortium of the more than 1,600 species of native California bees.</li>
  <li>Adventure Cabaret is holy scripture, written by the Universe through the medium of flawed human beings, just like every other “holy” scripture.</li>
  </ol>
  
  <img src="images/earth.jpg" width="640" height="640" alt="earth">`;

  res.send(`${header('Origins of Adventure Cabaret')}
${content}
${footer}`);

}

module.exports = Origins;