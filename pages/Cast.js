const Cast = async function (res) {

  const { header, footer } = require('../components');

  const content = `<br>
  <h1>Cast Resources</h1>
  <ol>
  <li><a href="schedule.pdf" target="_blank">Rehearsal and Performance Schedule</a></li>
  <li><a href="cast.pdf" target="_blank">Cast</a></li>
  <li><a href="role_assignments.pdf" target="_blank">Role Assignments</a></li>
  <li><a href="rundown.pdf" target="_blank">Rundown</a></li>
  <li>Rehearsals
  <br>
  All rehearsals are held at Shotgun Studios, 1201 University Ave., Berkeley
    <ul>
    <li><a href="rehearsal-1.pdf" target="_blank">Rehearsal 1 - Saturday, January 6, 1-5PM</a></li>
    <li>Rehearsal 2 - Saturday, January 13, 1-5PM</li>
    <li>Rehearsal 3 - Saturday, January 20, 1-5PM</li>
    <li>Rehearsal 4 - Saturday, January 27, 1-5PM</li>
    <li>Rehearsal 5 - Saturday, February 3, 1-5PM</li>
    </ul>
  </li>
  <li>Venues
    <ul>
    <li>Freight &amp; Salvage
    <br><a href="FS/F-S-street-1.jpg" target="_blank">street view 1</a>
    <br><a href="FS/F-S-street-2.jpg" target="_blank">street view 2</a>
    <br><a href="FS/F-S-floor-plan.jpg" target="_blank">floor plan</a>
    <br><a href="FS/F-S-seating.jpg" target="_blank">seating plan</a>
    <br><a href="FS/F-S-interior.jpg" target="_blank">interior - from side</a>
    <br><a href="FS/F-S-stage.jpg" target="_blank">interior - stage area</a>
    <br><a href="FS/F-S-from-stage.jpg" target="_blank">interior - from stage</a>
    <br><a href="FS/F-S-backstage.jpg" target="_blank">backstage</a>
    <br><a href="FS/F-S-below-decks.jpg" target="_blank">backstage below decks</a>
    </li>
    <li>Chevron Auditorium - International House
    <br><a href="IHouse/I-House-1.jpg" target="_blank">from seating</a>
    <br><a href="IHouse/I-House-2.jpg" target="_blank">from stage</a>
    </li>
  </li>
  </ol>`;

  res.send(`${header('Cast Resources')}
${content}
${footer}`);

}

module.exports = Cast;