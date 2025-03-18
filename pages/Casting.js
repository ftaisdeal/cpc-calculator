const Casting = async function (res) {

  const { header, footer } = require('../components');

  const content = `<h1>Casting for Adventure Cabaret</h1>
<p>Adventure Cabaret will be expanding soon, so we are looking for talented and dedicated performers to join our team. We work collaboratively, so we are specifically looking for people who are good at cooperation and positive group spirit.</p>

<p>It is not at all necessary that you have extensive experience already. Our search is only for the right people: creative, full of curiosity, willing to explore, willing to experiment, interested in going on a long, deep journey together.</p>

<p>Casting is sort of like dating; you want to know that we are interested in you, but we want to know that you are interested in us. When you write to us, please let us know what attracts you to Adventure Cabaret, and why you would want to be part of the production.</p>
  
<p>Please send us a headshot and resumé at <a href="mailto:casting@adventurecabaret.com?Subject=Casting+Submission">casting@adventurecabaret.com</a>.</p>

<p>Thank you for your interest in Adventure Cabaret!</p>

<br>
<br>`;

  res.send(`${header('Casting for Adventure Cabaret')}
${content}
${footer}`);

}

module.exports = Casting;