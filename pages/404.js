const Home = async function (res) {

  const { header, footer } = require('../components');

  const content = `<h1>Adventure Cabaret</h1>

  <h2>a mental, emotional and social feast</h2>
  about | upcoming shows | performers | pitch an act | join us | contact

  <h3>“This show will increase your IQ by a full 20 points!”</h3>

  <p>Adventure Cabaret is a live multitalent, multimedia show that recruits local talent of all different kinds and
    weaves different types of live performance together into a compelling set of deep experiences that also include
    audience participation in varied ways.</p>

  <p>Adventure and a spirit of courageous exploration are at the heart of Adventure Cabaret: adventure mentally,
    emotionally, culturally, artistically, but most of all in considering new and better ways of life for us all.</p>

  <p>Fundamental to Adventure Cabaret is that each performance also includes an after-show party, in which the
    performers and the audience mingle and get to know each other, offering further opportunities for personal
    connection, mutual assistance and further creativity.</p>`;

  res.send(`${header('Sustainable Choices')}
${content}
${footer}`);

}

module.exports = Home;