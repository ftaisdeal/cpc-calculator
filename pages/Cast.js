const Cast = async function (res) {

  const { header, footer } = require('../components');

  const content = `<h1>Cast Documents and Support</h1>
  <ol>
  <li>Rehearsal and Performance Schedule</li>
  <li>Role Assignments</li>
  </ol>`;

  res.send(`${header('Cast Documents and Support')}
${content}
${footer}`);

}

module.exports = Cast;