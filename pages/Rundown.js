const Rundown = async function (res) {

  const { header, footer } = require('../components');

  const content = `<h1>Show Rundown</h1>
  Below is the complete rundown for our first show, which runs at a very fast pace over the course of 90 minutes, and contains more than 70 different segments.
<h4>Pre-Show</h4>
<ol>
<li>Cosmos</li>
<li>Consciousness</li>
<li>Solar system</li>
<li>Metaconsciousness</li>
<li>Earth</li>
<li>Ocean</li>
<li>Metanoia</li>
<li>Insects</li>
<li>Metamorphosis</li>
<li>Overture</li>
<li>Metahuman</li>
<li>Thought Police Hotline</li>
<li>Krill Lives Matter</li>
<li>LED Fan Dance</li>
</ol>
<h4>Show</h4>
<ol>
<li>Intro</li>
<li>Seat belt sign / takeoff</li>
<li>The Empire of the Mind</li>
<li>Sticks &gt; Stones &gt; Bones</li>
<li>Words</li>
<li>Mistress of Ceremonies intro</li>
<li>Adulterated / Unadulterated</li>
<li>Away with words!</li>
<li>We Are Here Together</li>
<li>Simon Says Something Sinister / Let's Play Guitar!</li>
<li>Dr. Finlay Clinkscales, Professor of Horrific Human Stupidity</li>
<li>Language Is Not Reality</li>
<li>Why a cabaret?</li>
<li>The Talking Dog #1</li>
<li>War of the Words</li>
<li>Hindu Pushups</li>
<li>Floss News Alert #1</li>
<li>Unconstitutional!</li>
<li>Portable Melanometer</li>
<li>Do The Linky Pinky #1</li>
<li>Bulgaria</li>
<li>MC Introduces the First Message from Our Companions on the Planet</li>
<li>Messages from the Insects</li>
<li>The Flaming Uterus</li>
<li>The Talking Dog #2</li>
<li>I accidentally peed on my own grave</li>
<li>Jewish Pushups</li>
<li>Floss News Alert #2</li>
<li>Who Is Responsible for Most of the Violence in the World?</li>
<li>Do the Linky Pinky #2</li>
<li>Identification, please. #1</li>
<li>Amber Alert</li>
<li>Christian Pushups</li>
<li>The Talking Dog #3</li>
<li>Floss News Alert #3</li>
<li>Frozen Figures</li>
<li>Do the Linky Pinky #3</li>
<li>Messages from the Amphibians</li>
<li>The Potato Chip & the Battery</li>
<li>Don't Look Down On Manikins</li>
<li>The Talking Dog #4</li>
<li>The Modern Female Leonardo da Vinci</li>
<li>Identification, please. #2</li>
<li>Ideas of Heaven</li>
<li>Invite an Insight</li>
<li>What is the most important issue in the world?</li>
<li>No, that's not it.</li>
<li>The Human Potential Movement</li>
<li>Floss News Alert #4</li>
<li>Muslim Pushups</li>
<li>Do the Linky Pinky #4</li>
<li>Deeply Committed Agnostic Pushups</li>
<li>The Horrors of Homophily</li>
<li>Floss News Alert #5</li>
<li>Do the Linky Pinky #5</li>
<li>Meet Another Human Being</li>
<li>Messages from the Animals</li>
<li>Pantheist Pushups</li>
<li>Do The Linky Pinky #6</li>
<li>Not Committing Planetary Suicide</li>
<li>Let's Play with the Planet</li>
<li>We're All Dead, and So Is Everything Else</li>
<li>Planet B</li>
<li>Exorcism / Resurrection</li>
<li>The Future is already here.</li>
<li>Metahuman</li>
<li>Finale</li>
</ol>
<h3>END</h3>
<img src="images/brain.png" width="640" height="460" alt="abstract brain">
<br>
<br>`;

  res.send(`${header('Show Rundown')}
${content}
${footer}`);

}

module.exports = Rundown;