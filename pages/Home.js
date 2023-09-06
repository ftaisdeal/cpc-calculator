const Home = async function (res) {

  const { header, footer } = require('../components');

  const content = `<h1>Adventure Cabaret</h1>

  <h2>Prepare to be transformed.</h2>
  about | upcoming shows | performers | pitch an act | join us | contact

  <h3>“This show will increase your IQ by a full 20 points!”</h3>

  <p>Adventure Cabaret is a live multitalent, multimedia show that recruits local talent of all different kinds and
    weaves different types of live performance together into a compelling set of deep experiences that also include
    audience participation in varied ways.</p>

  <p>Adventure and a spirit of courageous exploration are at the heart of Adventure Cabaret: adventure mentally,
    emotionally, culturally, artistically, but most of all in considering new and better ways of life for us all.</p>`;

  res.send(`${header('Sustainable Choices')}
${content}
${footer}`);

}

module.exports = Home;