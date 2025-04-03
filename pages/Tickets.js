const Tickets = async function (res) {

  const { header, footer } = require('../components');

  const content = `<div class="review">
"Adventure Cabaret delivered a highly original, entertaining, and pithy show that courageously addressed important global issues confronting humanity today—with heart, soul, humor, and imagination."
<div class="review-name">&mdash; Adam M., from San Francisco</div>
</div>

<h1>Tickets</h1>
<b>April 5, 7:30pm</b>
<p><b>Phoenix Theater</b><br>
414 Mason St.<br>
San Francisco, CA</p>

<p>Two-for-one tickets now available for a limited time!</p>

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
</script>
<br>
<iframe width="560" height="315" src="https://www.youtube.com/embed/2EeoC8HxMnM?si=SyvCFCK9zTik5A1c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<br>
<br>
<br>`;

  res.send(`${header('Tickets for Adventure Cabaret')}
${content}
${footer}`);

}

module.exports = Tickets;