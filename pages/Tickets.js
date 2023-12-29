const Tickets = async function (res) {

  const { header, footer } = require('../components');

  const content = `<h1>Tickets</h1>
<b><a href="https://www.eventbrite.com/e/adventure-cabaret-tickets-714765271167" target="__blank">Tuesday, January 30, 2024</a></b><br>
7:00PM<br>
Freight &amp; Salvage<br>
2020 Addison St.<br>
Berkeley, CA
<p>
<div id="eventbrite-widget-container-714765271167"></div>

<script src="https://www.eventbrite.com/static/widgets/eb_widgets.js"></script>

<script type="text/javascript">
    var exampleCallback = function() {
        console.log('Order complete!');
    };

    window.EBWidgets.createWidget({
        // Required
        widgetType: 'checkout',
        eventId: '714765271167',
        iframeContainerId: 'eventbrite-widget-container-714765271167',

        // Optional
        iframeContainerHeight: 425,  // Widget height in pixels. Defaults to a minimum of 425px if not provided
        onOrderComplete: exampleCallback  // Method called when an order has successfully completed
    });
</script>
  `;

  res.send(`${header('Tickets for Adventure Cabaret')}
${content}
${footer}`);

}

module.exports = Tickets;