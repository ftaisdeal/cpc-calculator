const Home = async function (res) {

  const { header, footer } = require('../components');

  const content = `<h1>Home</h1>
  <p>Adventure Cabaret is a unique and unprecedented live theater experience that includes massive use of multimedia to bring you into the Empire of Ideas, and gradually transform you into an alien who can help save humanity from itself.</p>
  
  <p>As if that weren't enough, you will also be massively entertained by an astral LED fan artist, a miraculous disabled guitar player, a heavy metal band improvising to the longest list of human vices you have ever heard, and great actors performing deep scenes of love and pain and joy and failure and transformation and redemption.</p>
  
  <p>Isn't it about time somebody did this?  We think so, and we're doing it!</p>
  
  <p>Take a mere 90 minutes out of your week and go home with a head full of amazing experiences and beautiful ideas.  See you at the show!</p>
    <img src="images/bee-in-hula.jpg">`;

  res.send(`${header('Adventure Cabaret')}
${content}
${footer}`);

}

module.exports = Home;