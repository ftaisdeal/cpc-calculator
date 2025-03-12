const Questions = async function (res) {

  const { header, footer } = require('../components');

  const content = `<h1>Questions</h1>
  <ol>
<li>Accurate to 100 pounds, what is the total weight of all your possessions?</li>
<li>How many words don't you know?</li>
<li>What are you not aware of?</li>
<li>How many distinct major categories of stupidity can you list?</li>
<li>What is the size of your carbon footprint, and is it bigger this year?</li>
<li>If you could get a complete personality transplant at no cost, what kind of personality would you choose?</li>
<li>How many crucial memories from earlier in your life have you repressed, but that still have a powerful unconscious influence over you?</li>
<li>At this point, based on the evidence, does humanity deserve to survive?</li>
<li>In your life so far, how much ecological damage have you been responsible for, directly or indirectly?</li>
<li>What situations in your life do you complain about that are actually your fault?</li>
<li>Are current conditions in the world only everyone else's fault?</li>
<li>If you were offered the concscious choice between challenging truths or comforting lies, which would you choose?</li>
<li>Just how much responsibility do you reject, and in what areas?</li>
<li>If you could personally bring more valid hope to the world, but doing so would require an effort to change yourself, would you make that effort?</li>
 </ol>
 <br>
 <br>`;

  res.send(`${header('Adventure Cabaret: Questions')}
${content}
${footer}`);

}

module.exports = Questions;