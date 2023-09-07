const Home = async function (res) {

  const { header, footer } = require('../components');

  const content = `<h1>Home</h1>
  <p>Adventure Cabaret is a live multitalent, multimedia show that recruits local talent of all kinds and
    weaves different types of live performance together into a compelling set of deep experiences that also include
    audience participation in varied ways.</p>

  <p>Adventure and a spirit of courageous exploration are at the heart of Adventure Cabaret: adventure mentally,
    emotionally, culturally, artistically, but most of all in considering new and better ways of life for us all.</p>
    <img src="images/bee-in-hula.jpg">`;

  res.send(`${header('Adventure Cabaret')}
${content}
${footer}`);

}

module.exports = Home;