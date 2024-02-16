const Tickets = async function (res) {

  const { header, footer } = require('../components');

  const content = `<h1>Tickets</h1>

  <p>No full performances of Adventure Cabaret are currently scheduled, but we develop our material partly through storytelling events with our sister site, <a href="https://storytelling.social">Storytelling Social</a>.</p>

  <p>The next Storytelling Social event is on Tuesday, March 5, 7:30-9:00pm.</p>

  <p>The venue is a small dance studio at Market and Jones.</p>

  <noscript><a href="https://www.eventbrite.com/e/storytelling-social-starter-event-tickets-839546214327"
          rel="noopener noreferrer" target="_blank">Buy Tickets on Eventbrite</a></noscript>
      <button id="eventbrite-widget-modal-trigger-839546214327" class="button" type="button">get tickets</button>

      <script src="https://www.eventbrite.com/static/widgets/eb_widgets.js"></script>

      <script type="text/javascript">
        var exampleCallback = function () {
          console.log('Order complete!');
        };

        window.EBWidgets.createWidget({
          widgetType: 'checkout',
          eventId: '839546214327',
          modal: true,
          modalTriggerElementId: 'eventbrite-widget-modal-trigger-839546214327',
          onOrderComplete: exampleCallback
        });
      </script>
      
<br>
<br>`;

  res.send(`${header('Tickets for Adventure Cabaret')}
${content}
${footer}`);

}

module.exports = Tickets;