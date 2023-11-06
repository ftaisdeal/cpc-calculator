const Cast = async function (res) {

  const { header, footer } = require('../components');

  const content = `<br>
  <h1>Cast Resources</h1>
  <ol>
  <li><a href="schedule.pdf" target="_blank">Rehearsal and Performance Schedule</a></li>
  <li><a href="cast.pdf" target="_blank">Cast</a></li>
  <li><a href="role_assignments.pdf" target="_blank">Role Assignments</a></li>
  <li><a href="script.pdf" target="_blank">Complete Script</a> - available December 1</li>
  <li><a href="rundown.pdf" target="_blank">Rundown</a></li>
  </ol>`;

  res.send(`${header('Cast Resources')}
${content}
${footer}`);

}

module.exports = Cast;