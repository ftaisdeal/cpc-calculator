const Cast = async function (res) {

  const { header, footer } = require('../components');

  const content = `<br>
  <h1>Documents and Support for the Cast</h1>
  <ol>
  <li><a href="schedule.pdf" target="_blank">Rehearsal and Performance Schedule</a></li>
  <li><a href="cast.pdf" target="_blank">Cast</a></li>
  <li><a href="role_assignments.pdf" target="_blank">Role Assignments</a></li>
  <li>Complete Script - available December 1</li>
  </ol>`;

  res.send(`${header('Documents and Support for the Cast')}
${content}
${footer}`);

}

module.exports = Cast;