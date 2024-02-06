const Home = async function (res) {

  const { header, footer } = require('../components');

  const content = `<h1>What the heck is this?</h1>
Adventure Cabaret is a unique theater experience, combining live actors with immersive multimedia:

<p>...a journey through the Empire of the Mind.</p>

<p>...an escape from the prison of nostalgia.</p>
  
<p>...an exploration of how much better humanity could become.</p>

<p>Quick samples from the show:</p>

<p><a href="https://www.youtube.com/watch?v=NtIzTKCOuIs">Introduction</a></p>

<p><a href="https://www.youtube.com/watch?v=zemRmZ2hrps">The Empire of the Mind</a></p>
  
<p>Spend 90 minutes with us, and go home with lots of laughs and a head full of beautiful and inspiring new ideas.</p>

<p>See you at the show!</p>

<img src="images/bee-in-hula.jpg" height="497" width="538" alt="bee flying through LED hula hoop">`;

  res.send(`${header('Adventure Cabaret')}
${content}
${footer}`);

}

module.exports = Home;