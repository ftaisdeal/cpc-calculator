const Casting = async function (res) {

  const { header, footer } = require('../components');

  const content = `<h1>Casting Notice</h1>
This is a paid production, and we are specifically looking to cast UCB students because the production is local to Berkeley, and follows the UCB academic calendar. The first performance is at Freight &amp; Salvage on January 30, 2024, followed by two performances in Chevron Auditorium at International House, February 10 and 24. There are four rehearsals on Saturdays 1-5pm in January: 1/6, 1/13, 1/20, and 1/27.

<p>Pay is $50 per hour, payable at the end of each month.</p>

<p>To apply for either role listed below, send an email message to <a href="mailto:contact@adventurecabaret.com?Subject=Adventure%20Cabaret%20Casting">contact@adventurecabaret.com</a>. Include a headshot, a resumé and if possible a link to a video of you performing.</p>

<p>Auditions are the week of October 9, and are by video. We use Google Meet, and will send you the URL for your audition. We do not need you to prepare a monologue, as we will only be using material from the production for auditions.</p>

<p>Casting is now underway for two roles:</p>
  
<h3>Mistress of Ceremonies / Dramatic Roles</h3>
This is a front-and-center role in a major live production. The role is tremendously varied, involving direct and deep engagement with the audience as well as with the other members of the cast. We are looking for someone who can read an audience swiftly and accurately, and turn on a dime from comedy and absurd improv to deeply emotional stories that will bring tears to the audience. Most of all, we are looking for compatibility with the material for the show, and with our working style.
  
<h3>Storyteller / Dramatic Roles</h3>
This role requires excellent storytelling ability, and the ability to move quickly from deep drama to absurd comedy. We would also like someone who is able to improv if necessary and is not afraid of big, bold gestures.  Most of all, we are looking for compatibility with the material for the show, and with our working style.
`;

  res.send(`${header('Casting Notice')}
${content}
${footer}`);

}

module.exports = Casting;