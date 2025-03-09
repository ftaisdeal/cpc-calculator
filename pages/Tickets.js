const Tickets = async function (res) {

  const { header, footer } = require('../components');

  const content = `<h1>Tickets</h1>
<b>March 22nd Performance</b>
<noscript><a href="https://www.eventbrite.com/e/adventure-cabaret-metanoia-version-10-tickets-1255264232109" rel="noopener noreferrer" target="_blank">Buy Tickets on Eventbrite</a></noscript>
<br><button id="eventbrite-widget-modal-trigger-1255264232109" type="button" style="padding:10px; border-radius: 4px; background-color: #4c4;">Buy Tickets</button>
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
<p><b>Phoenix Theater</b><br>
414 Mason St.<br>
San Francisco, CA 94102</p>
<br>
<br>
<br>
<br>`;

  res.send(`${header('Tickets for Adventure Cabaret')}
${content}
${footer}`);

}

module.exports = Tickets;