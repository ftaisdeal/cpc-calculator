const Rundown = async function (res) {

  const { header, footer } = require('../components');

  const content = `<h1>Show Rundown</h1>
  Below is the complete rundown for our first show, which runs at a very fast pace over the course of 90 minutes, and contains 68 different segments, plus a party at the end.
<h4>Pre-Show</h4>
<ol>
<li>WordMovie</li>
<li>Categories of Stupidity</li>
<li>Overture</li>
<li>Thought Police Hotline</li>
<li>Krill Lives Matter</li>
<li>Adventure Cabaret</li>
<li>Seat Belt Sign / Takeoff</li>
<li>The Empire of the Mind</li>
<li>Words</li>
<li>MC Intro</li>
<li>Adulterated / Unadulterated</li>
<li>Away with words!</li>
<li>We Are Here Together</li>
<li>Simon Says Something Sinister / Let's Play Guitar!</li>
<li>Professor Finlay Clinkscales</li>
<li>Language Is not Reality</li>
<li>Why A Cabaret?</li>
<li>George's Story</li>
<li>The Talking Dog #1</li>
<li>War of the Words</li>
<li>Hindu Pushups</li>
<li>Unconstitutional!</li>
<li>Floss News Alert #1</li>
<li>Portable Melanometer</li>
<li>Do The Linky Pinky #1</li>
<li>Bulgaria</li>
<li>The MC Introduces the First Message</li>
<li>Messages from the Insects</li>
<li>The Talking Dog #2</li>
<li>Jewish Pushups</li>
<li>I accidentally peed on my own grave</li>
<li>Floss News Alert #2</li>
<li>Who Is Responsible for Most of the Violence in the World?</li>
<li>Vegetables Are Superior to People</li>
<li>Do The Linky Pinky #2</li>
<li>Invite an Insight</li>
<li><b>Intermission</b></li>
<li>Identification, please. #1</li>
<li>Christian Pushups</li>
<li>The Talking Dog #3</li>
<li>Floss News Alert #3</li>
<li>Frozen Figures</li>
<li>Do The Linky Pinky #3</li>
<li>The Potato Chip & the Battery</li>
<li>Floss News Alert #4</li>
<li>Messages from the Amphibians</li>
<li>Don't Look Down On Manikins</li>
<li>Identification, please. #2</li>
<li>Floss News Alert #5</li>
<li>Ideas of Heaven</li>
<li>Muslim Pushups</li>
<li>Ode to the Armchair Avenger</li>
<li>The Horrors of Homophily</li>
<li>What is the most important issue in the world?</li>
<li>No, that's not it.</li>
<li>Floss News Alert #6</li>
<li>What Ever Happened to The Human Potential Movement?</li>
<li>Deeply Committed Agnostic Pushups</li>
<li>Messages from the Animals</li>
<li>Pantheist Pushups</li>
<li>Not Committing Planetary Suicide</li>
<li>Let's Play with the Planet</li>
<li>We're All Dead, and So Is Everything Else</li>
<li>Please Take Offense</li>
<li>Metanoia</li>
<li>Metamorphosis</li>
<li>Finale</li>
<li>Outro</li>
<li>Party</li>
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