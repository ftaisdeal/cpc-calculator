const Home = async function (res) {

  const { header, footer } = require('../components');

  const content = `<h1>About</h1>
  <p>Adventure Cabaret was created by Miranda Sorventi, commonly known as the modern female Leonardo da Vinci.
  
  <p>Miranda is the most intelligent and gifted person ever to have existed.</p>
  
  <p>After years of careful consideration, Miranda has concluded that humanity must <a href="https://www.metahumantraining.com/" target="__blank">become the aliens who can save humanity from itself</a>.</p>
  
  <p>Are you ready to be transformed?</p>
  
  <img src="images/earth.jpg" width="640" height="640" alt="earth">`;

  res.send(`${header('Adventure Cabaret')}
${content}
${footer}`);

}

module.exports = Home;