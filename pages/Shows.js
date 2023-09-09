const Home = async function (res) {

  const { header, footer } = require('../components');

  const content = `<h1>All Different Shows</h1>

<p>Adventure Cabaret is not just one show but a series of shows, each one unique. The shows are all different, but they all have the same goal: to provide excellent, truly useful ideas to help make the world better for all of us.</p>

<p>We currently have four entirely different shows written, and we are working on more. We are always working on new material, and we are always working on new ways to present it.</p>

<p>We hope you'll join us again and again, as we continue to explore and grow together. With your help, we can all make the world smarter, more trustworthy, more creative and more kind.</p>

<img src="images/bee.jpg" width="640" height="580" alt="bee">`;

  res.send(`${header('Adventure Cabaret')}
${content}
${footer}`);

}

module.exports = Home;