const Cast = async function (res) {

  const { header, footer } = require('../components');

  const content = `<br>
  <h1>Documents and Support for Cast</h1>
  <ol>
  <li><a href="schedule.pdf" target="_blank">Rehearsal and Performance Schedule</a></li>
  <li><a href="role_assignments.pdf" target="_blank">Role Assignments</a></li>
  </ol>`;

  res.send(`${header('Documents and Support for Cast')}
${content}
${footer}`);

}

module.exports = Cast;