const Cast = async function (res) {

  const { header, footer } = require('../components');

  const content = `<br>
  <h1>Cast Resources</h1>
  <ol>
  <li><a href="https://calendar.google.com/calendar/embed?src=8e5c1ec36e594255d6c129babd187c37bd0a2d9b5922675dd51e97d1dea6f8fe%40group.calendar.google.com&ctz=America%2FNew_York" target="_blank">Rehearsal and Performance Schedule</a></li>
  <li><a href="cast.pdf" target="_blank">Cast</a></li>
  <li><a href="role_assignments.pdf" target="_blank">Role Assignments</a></li>
  <li><a href="rundown.pdf" target="_blank">Rundown</a></li>
  </li>
  <li>Venues
  <p>
  Freight &amp; Salvage
  <br><a href="FS/F-S-street-1.jpg" target="_blank">street view 1</a>
  <br><a href="FS/F-S-street-2.jpg" target="_blank">street view 2</a>
  <br><a href="FS/F-S-floor-plan.jpg" target="_blank">floor plan</a>
  <br><a href="FS/F-S-seating.jpg" target="_blank">seating plan</a>
  <br><a href="FS/F-S-interior.jpg" target="_blank">interior - from side</a>
  <br><a href="FS/F-S-stage.jpg" target="_blank">interior - stage area</a>
  <br><a href="FS/F-S-from-stage.jpg" target="_blank">interior - from stage</a>
  <br><a href="FS/F-S-backstage.jpg" target="_blank">backstage</a>
  <br><a href="FS/F-S-below-decks.jpg" target="_blank">backstage below decks</a>
  </p>
  <p>
  Chevron Auditorium - International House
  <br><a href="IHouse/I-House-1.jpg" target="_blank">from seating</a>
  <br><a href="IHouse/I-House-2.jpg" target="_blank">from stage</a>
  </p>
  </li>
  </ol>`;

  res.send(`${header('Cast Resources')}
${content}
${footer}`);

}

module.exports = Cast;