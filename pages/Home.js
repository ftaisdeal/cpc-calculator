const Home = async function (res) {

  const { header, footer } = require('../components');

  const content = `<h1>What the heck is this?</h1>
Adventure Cabaret is a unique theater experience, combining live actors with immersive multimedia:

<p>...a journey through the Empire of the Mind.</p>

<p>...an escape from the prison of nostalgia.</p>
  
<p>...an exploration of how much better humanity could become.</p>
  
<p>Spend 90 minutes with us, and go home with lots of laughs and a head full of beautiful and inspiring new ideas.</p>

<p>Samples:</p>

<p>1. <a href="https://www.youtube.com/watch?v=NtIzTKCOuIs" target="__blank">Introduction</a></p>

<p>2. <a href="https://www.youtube.com/watch?v=zemRmZ2hrps" target="__blank">The Empire of the Mind</a></p>

<h3><a href="/update">Update on progress and plans</a></h3>

<!--
<p><a href="https://www.youtube.com/@AdventureCabaret">=YouTube</a>
<p><a href="https://www.instagram.com/adventurecabaret">Instagram</a>
<p><a href="https://www.tiktok.com/@adventurecabaret">TikTok</a>
-->

<img src="images/bee-in-hula.jpg" height="497" width="538" alt="bee flying through LED hula hoop">`;

  res.send(`${header('Adventure Cabaret')}
${content}
${footer}`);

}

module.exports = Home;