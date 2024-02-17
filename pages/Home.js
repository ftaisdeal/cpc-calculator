const Home = async function (res) {

  const { header, footer } = require('../components');

  const content = `<h1>What the heck is this?</h1>
Adventure Cabaret is a unique theater experience, combining live actors with immersive multimedia:

<p>...a journey through the Empire of the Mind.</p>

<p>...an escape from the prison of nostalgia.</p>
  
<p>...an exploration of how much better humanity could become.</p>
  
<p>Spend 90 minutes with us, and go home with lots of laughs and a head full of beautiful and inspiring new ideas.</p>

Samples:

<br>1. <a href="https://www.youtube.com/watch?v=NtIzTKCOuIs" target="__blank">Introduction</a>

<br>2. <a href="https://www.youtube.com/watch?v=zemRmZ2hrps" target="__blank">The Empire of the Mind</a>

<p>
<form action="email" method="post">
<input type="email" name="email" style="width: 28ch;" placeholder="enter email to stay in touch"> <button type="submit" class="button">send</button>
</form>
</p>

<p>Please visit our sister site, <a href="https://bit.ly/42PGVWj" target="__blank">Storytelling Social</a>.</p>

<img src="images/bee-in-hula.jpg" height="497" width="538" alt="bee flying through LED hula hoop">`;

  res.send(`${header('Adventure Cabaret')}
${content}
${footer}`);

}

module.exports = Home;