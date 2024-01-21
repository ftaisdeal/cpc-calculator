const Cast = async function (res) {

  const { header, footer } = require('../components');

  const content = `<h1>Cast Resources</h1>
 
  <ol>
<li><h3><a href="https://calendar.google.com/calendar/embed?src=8e5c1ec36e594255d6c129babd187c37bd0a2d9b5922675dd51e97d1dea6f8fe%40group.calendar.google.com&ctz=America%2FNew_York" target="_blank">Rehearsal and Performance Schedule</a></h3></li>
 
<li>
<h3>Cast</h3>
<b><a href="https://www.jamellacross.com/" target="__blank">Jamella Cross</a></b> - MC
<br>Oakland - <a href="mailto:crossmella@gmail.com?Subject=Adventure Cabaret">crossmella@gmail.com</a> - (510) 957-7371

<p><b><a href="https://www.imdb.com/name/nm14891213/" target="__blank">Amosi Morgan</a></b> - Dr. Finlay Clinkscales, other roles
<br>Oakland - <a href="mailto:amosimorgan23@gmail.com?Subject=Adventure Cabaret">amosimorgan23@gmail.com</a> - (510) 850-4330

<p><b><a href="https://www.backstage.com/u/Uscocovic/" target="__blank">Svetlana Uskokovic</a></b> - Lola de Campa, other roles
<br>San Francisco - <a href="mailto:uskokovicsv@gmail.com?Subject=Adventure Cabaret">uskokovicsv@gmail.com</a> - (415) 666-6078

<p><b><a href="https://filmfreeway.com/CrawfordBanks" target="__blank">Crawford Banks</a></b> - Storyteller, other roles
<br>Crawford Banks - <a href="mailto:cbcrawdad1@gmail.com?Subject=Adventure Cabaret">cbcrawdad1@gmail.com</a> - (210) 758-9888

<p><b><a href="https://www.backstage.com/u/natalia-kataeva/" target="__blank">Natalia Kataeva</a></b> - Storyteller, other roles
<br>Sunnyvale - <a href="mailto:kataichik@gmail.com?Subject=Adventure Cabaret">kataichik@gmail.com</a>	- (408) 309-4564

<p><b><a href="https://www.backstage.com/u/ziare-whitelow/" target="__blank">Ziare Whitelow</a></b> - Storyteller, other roles
<br>Vallejo - <a href="mailto:crossmella@gmail.com?Subject=Adventure Cabaret">wziare@yahoo.com</a> - (707) 980-4444

<p><b><a href="https://www.backstage.com/u/madina-zhalgas/" target="__blank">Madina Zhalgas</a></b> - MC understudy
<br>Marin - <a href="mailto:zhalgas.madinallc@gmail.comm?Subject=Adventure Cabaret">zhalgas.madinallc@gmail.com</a>	- (646) 266-7670

<p><b><a href="https://www.entertainersworldwide.com/tracy-fuller-profile-167834" target="__blank">Tracy Fuller</a></b> - Miranda Sorventi
<br>San Jose - <a href="mailto:crossmella@gmail.com?Subject=Adventure Cabaret">tracypfuller@gmail.com</a>	- (720) 333-9026

<p><b><a href="https://www.alilfilm.com/about" target="__blank">Alex Mastoon</a></b> - Stage Manager
<br>San Mateo - <a href="mailto:alilfilm@gmail.com?Subject=Adventure Cabaret">alilfilm@gmail.com</a> -(510) 506-3648
</li>

<li>
<h3><a href="rundown.pdf" target="_blank">Complete Show Rundown</a></h3>
</li>

<li>
<h3>Venues</h3>
<p>
<b>International House - Chevron Auditorium</b>
<br><a href="IHouse/I-House-1.jpg" target="_blank">from seating</a>
<br><a href="IHouse/I-House-2.jpg" target="_blank">from stage</a>
</p>
</li>`;

  res.send(`${header('Cast Resources')}
${content}
${footer}`);

}

module.exports = Cast;