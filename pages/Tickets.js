const Tickets = async function (res) {

  const { header, footer } = require('../components');

  const content = `<h1>Tickets</h1>

<h4>March 1st Performance</h4>
<button style="padding:10px; border-radius: 4px; background-color: #c44;"><b>SOLD OUT</b></button>

<h4>March 22nd Performance</h4>
Phoenix Theater, 414 Mason St, San Francisco, CA 94102
<div id="eventbrite-widget-container-1255264232109"></div>

<script src="https://www.eventbrite.com/static/widgets/eb_widgets.js"></script>

<script type="text/javascript">
    var exampleCallback = function() {
        console.log('Order complete!');
    };

    window.EBWidgets.createWidget({
        // Required
        widgetType: 'checkout',
        eventId: '1255264232109',
        iframeContainerId: 'eventbrite-widget-container-1255264232109',

        // Optional
        iframeContainerHeight: 425,  // Widget height in pixels. Defaults to a minimum of 425px if not provided
        onOrderComplete: exampleCallback  // Method called when an order has successfully completed
    });
</script>`;

  res.send(`${header('Tickets for Adventure Cabaret')}
${content}
${footer}`);

}

module.exports = Tickets;