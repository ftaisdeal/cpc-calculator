const Home = async function (res) {

  const { header, footer } = require('../components');

  const content = `<h1>What the heck is this?</h1>
<p>Adventure Cabaret is a journey through the Empire of the Mind.</p>

<p>Adventure Cabaret is an escape from the prison of nostalgia.</p>
  
<p>Adventure Cabaret is an exploration of how much better humanity could become, if only it chose to do so.</p>
  
<p>Adventure Cabaret is a grand tour through all of space, all of time, and all of your personality.</p>

<p>Adventure Cabaret is loads of fun, and at least two barrels full of laughs.</p>
  
<p>Take a mere 90 minutes out of your week and go home with a head full of amazing experiences and beautiful ideas.</p>
  
<p>See you at the show!</p>

<img src="images/bee-in-hula.jpg" height="497" width="538" alt="bee flying through LED hula hoop">`;

  res.send(`${header('Adventure Cabaret')}
${content}
${footer}`);

}

module.exports = Home;