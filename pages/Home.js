const Home = async function (res) {

  const { header, footer } = require('../components');

  const content = `<div class="images">
<div class="image"><img src="images/bg1.jpg" width="100" height="67" alt="thumbnail background 1"></div>
<div class="image"><img src="images/bg2.jpg" width="100" height="67" alt="thumbnail background 2"></div>
<div class="image"><img src="images/bg3.jpg" width="100" height="67" alt="thumbnail background 3"></div>
<div class="image"><img src="images/bg4.jpg" width="100" class="hide" height="67" alt="thumbnail background 4"></div>
<div class="image"><img src="images/bg5.jpg" width="100" class="hide" height="67" alt="thumbnail background 5"></div>
<div class="image"><img src="images/bg6.jpg" width="100" class="hide" height="67" alt="thumbnail background 6"></div>
</div>

<p>Adventure Cabaret is a unique theater experience, combining live actors with immersive multimedia:</p>

<p>&#8212; A journey through <a href="https://www.youtube.com/watch?v=zemRmZ2hrps" target="__blank">The Empire of the Mind</a></p>

<p>&#8212; An escape from the prison of nostalgia</p>
  
<p>&#8212; An exploration of how much better humanity could become</p>
  
<p>Spend 90 minutes with us, and go home with lots of laughs and a head full of beautiful and inspiring new ideas.</p>

<p><b>Performance April 5th, 7:30pm</b><br>
Phoenix Theater<br>
414 Mason St.<br>
San Francisco, CA</p>

<noscript><a href="https://www.eventbrite.com/e/adventure-cabaret-metanoia-version-10-tickets-1255264232109" rel="noopener noreferrer" target="_blank">Buy Tickets on Eventbrite</a></noscript>
<button id="eventbrite-widget-modal-trigger-1255264232109" type="button" class="button">buy tickets</button>

<script src="https://www.eventbrite.com/static/widgets/eb_widgets.js"></script>

<script type="text/javascript">
    var exampleCallback = function() {
        console.log('Order complete!');
    };

    window.EBWidgets.createWidget({
        widgetType: 'checkout',
        eventId: '1255264232109',
        modal: true,
        modalTriggerElementId: 'eventbrite-widget-modal-trigger-1255264232109',
        onOrderComplete: exampleCallback
    });
</script>

<p>
Stay in touch about our progress and performances.
<form action="email" method="post">
<input type="email" name="email" class="email" placeholder="enter email to stay in touch">
<input type="email" name="liame" style="width: 28ch; padding: 6px; border-radius:4px;" placeholder="enter email to stay in touch" required> <button type="submit" class="button">send</button>
</form>
</p>

<p>"This play seamlessly blended drama and humor, delivering an inspiring and thought-provoking experience as well as a message that leaves a lasting impact on the audience."</p>

<p style="padding-left: 20px;">&mdash;Shelly H., from Oakland</p>

<br>

<p><img src="images/brain.png" width="640" height="460" alt="abstract brain"></p>`;

  res.send(`${header('Adventure Cabaret')}
${content}
${footer}`);

}

module.exports = Home;