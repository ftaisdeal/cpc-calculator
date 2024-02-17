const Actors = async function (res) {

  const { header, footer } = require('../components');

  const content = `<h1>Seeking Talented Actors</h1>
<p>We have completed a pilot of the project, and are now seeking talented actors for the production phase.</p>

<p>This is an entrepreneurial project that we expect will be a major hit for years to come and will make a large profit.</p>

<p>We have a highly innovative, copyrighted script.  We have done a complete set of rehearsals with a pilot cast, and the results of rehearsal showed us that we have a hit on our hands.  In addition, we have a deeply talented multimedia production team in place, because the show involves not just live actors, but immersive multimedia.</p>

<p>What we do not yet have is exactly the right actors.</p>

<h3>What we are looking for in actors</h3>

<p>We are looking for actors who are talented, courageous, curious and have a good understanding of entrepreneurial projects.</p>

<p>We are looking for people who understand what an investment is: an investment of time and effort, an investment of spirit toward a long term goal, and long term rewards.</p>

<p>If you just want to be on stage and collect a paycheck next week, this is probably not the project for you.</p>

<p>But if you want to be part of something truly meaningful and important, want to reap big rewards a bit down the line, and are willing to do the necessary work, please send a headshot and resumé to <a href="mailto:contact@adventurecabaret.com?subject=Adventure Cabaret: Actor Application">contact@adventurecabaret.com</a>.</p>

<p>You may also call us directly at (415) 579-2586.</p>

We look forward to hearing from you.

<br>
<br>
<br>
<br>`;

  res.send(`${header('Contact Adventure Cabaret')}
${content}
${footer}`);

}

module.exports = Actors;