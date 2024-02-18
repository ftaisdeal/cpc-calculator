const Home = async function (res) {

  const { header, footer } = require('../components');

  const content = `<img src="images/bg1.jpg" width="100" height="67" alt="thumbnail background 1">
<img src="images/bg2.jpg" width="100" height="67" alt="thumbnail background 2">
<img src="images/bg3.jpg" width="100" height="67" alt="thumbnail background 3">
<img src="images/bg4.jpg" width="100" height="67" alt="thumbnail background 4">
<img src="images/bg5.jpg" width="100" class="hide" height="67" alt="thumbnail background 5">
<img src="images/bg6.jpg" width="100" class="hide" height="67" alt="thumbnail background 6">

<p>Adventure Cabaret is a unique theater experience, combining live actors with immersive multimedia:</p>

<p>&#8212; A journey through <a href="https://www.youtube.com/watch?v=zemRmZ2hrps" target="__blank">The Empire of the Mind</a></p>

<p>&#8212; An escape from the prison of nostalgia</p>
  
<p>&#8212; An exploration of how much better humanity could become</p>
  
<p>Spend 90 minutes with us, and go home with lots of laughs and a head full of beautiful and inspiring new ideas.</p>

Samples:

<br>1. <a href="https://www.youtube.com/watch?v=NtIzTKCOuIs" target="__blank">Introduction</a>

<br>2. <a href="https://www.youtube.com/watch?v=zemRmZ2hrps" target="__blank">The Empire of the Mind</a>

<h3><a href="/actors">Seeking Talented Actors for the Production</a></h3>

<p><b>Stay in touch about our progress and performances.
<form action="email" method="post">
<input type="email" name="email" style="width: 28ch;" placeholder="enter email to stay in touch"> <button type="submit" class="button">send</button>
</form></p>

<p>Please visit our sister site, <a href="https://bit.ly/42PGVWj" target="__blank">Storytelling Social</a>.</p>

<img src="images/bee-in-hula.jpg" height="497" width="538" alt="bee flying through LED hula hoop">`;

  res.send(`${header('Adventure Cabaret')}
${content}
${footer}`);

}

module.exports = Home;