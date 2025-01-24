const Home = async function (res) {

  const { header, footer } = require('../components');

  const content = `<div class="images">
<div class="image"><img src="images/bg1.jpg" width="100" height="67" alt="thumbnail background 1"></div>
<div class="image"><img src="images/bg2.jpg" width="100" height="67" alt="thumbnail background 2"></div>
<div class="image"><img src="images/bg3.jpg" width="100" height="67" alt="thumbnail background 3"></div>
<div class="image"><img src="images/bg4.jpg" width="100" class="hide" height="67" alt="thumbnail background 4"></div>
<div class="image"><img src="images/bg5.jpg" width="100" class="hide" height="67" alt="thumbnail background 5"></div>
<div class="image"><img src="images/bg6.jpg" width="100" class="hide" height="67" alt="thumbnail background 6"></div>
</div>

<p>Adventure Cabaret is a unique theater experience, combining live actors with immersive multimedia:</p>

<p>&#8212; A journey through <a href="https://www.youtube.com/watch?v=zemRmZ2hrps" target="__blank">The Empire of the Mind</a></p>

<p>&#8212; An escape from the prison of nostalgia</p>
  
<p>&#8212; An exploration of how much better humanity could become</p>
  
<p>Spend 90 minutes with us, and go home with lots of laughs and a head full of beautiful and inspiring new ideas.</p>

Samples:

<br>1. <a href="https://youtu.be/0RN5fGF61G4" target="__blank">Content Warning Notice</a>

<br>2. <a href="https://www.youtube.com/watch?v=NtIzTKCOuIs" target="__blank">Introduction</a>

<br>3. <a href="https://www.youtube.com/watch?v=zemRmZ2hrps" target="__blank">The Empire of the Mind</a>

<br>4. <a href="https://youtu.be/BtYu_1KSXBk" target="__blank">Messages from the Insects</a>

<br>5. <a href="https://www.youtube.com/watch?v=c3vVPxg896M" target="__blank">QuoteMovie</a>

<br>

<p>
<b>Stay in touch about our progress and performances.</b>
<form action="email" method="post">
<input type="email" name="email" style="display: none;" placeholder="enter email to stay in touch">
<input type="email" name="liame" style="width: 28ch;" placeholder="enter email to stay in touch"> <button type="submit" class="button">send</button>
</form>
</p>

<img src="images/brain-in-hula.png" height="497" width="538" alt="brain inside LED hula hoop">`;

  res.send(`${header('Adventure Cabaret')}
${content}
${footer}`);

}

module.exports = Home;