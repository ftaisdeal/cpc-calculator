const EmailTemplate = (first_name, token) => {

  const subject = `Adventure Cabaret Newsletter`;

  const text = `Thank you for signing up earlier to receive our newsletter.`;

  const body = `<p>Thank you for signing up earlier to receive our newsletter.</p>

<p>Adventure Cabaret has made tremendous progress in the past few months, and we are thrilled to announce that our first performance is only two weeks away.</p>

<p><a href="https://www.eventbrite.com/e/adventure-cabaret-metanoia-version-10-tickets-1119346739229"><b>Buy tickets now</b></a>, because this show is definitely going to sell out!</p>

<p><b>Saturday, March 1, 2025 - 7:30 PM</b></p>
<b>Phoenix Theater</b><br>
414 Mason St., Sixth Floor, Suite 604<br>
San Francisco, CA 94102<br>

<p>We have been flexing our minds like crazy to bring you the best show possible!</p>
<p><img src="https://adventurecabaret.com/images/brain-flex.png" alt="Adventure Cabaret brain" width="400" height="181"></p>
<p>We look forward to seeing you at the show, and dancing the Linky Pinky with you!</p>
<p><img src="https://adventurecabaret.com/images/hand-colored.png" alt="Adventure Cabaret colored hand" width="200" height="313"></p>`;

  let salutation = '';
  if (first_name) {
    salutation = `<p>Dear ${first_name}:</p>`;
  }

  const html = `<html>
<head>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Nothing+You+Could+Do&display=swap" rel="stylesheet">
<style>
body {
font-family: Verdana, Arial, sans-serif;
font-size: 1em;
max-width: 800px;
}
.header {
  background-color: black;
  padding: 10px;
}
.title {
  font-size: 3.5em;
  font-family: 'Nothing You Could Do', cursive;
  line-height: normal;
}
.content {
  padding: 20px;
}
a {
  text-decoration: none;
}
.footer {
  background-color: #8a8;
  padding: 6px;
}
</style>
</head>
<body>
<div class="header">
<span class="title"> <a href="https://adventurecabaret.com"><span style="color:#674ea7;">A</span><span style="color:#6aa84f;">d<span><span style="color:#e06666;">v<span><span style="color:#ffd966;">e<span><span style="color:#3c78d8;">n<span><span style="color:#38761;">t<span><span style="color:#a64d78;">u<span><span style="color:#dd7e6b;">r<span><span style="color:#a4c2f4;">e<span> <span style="color:#cd4025;">C</span><span style="color:#fff;">abaret</span></a></span>
</div>
<div class="content">
${salutation}
${body}
<p>Visit <a href="https://adventurecabaret.com">https://adventurecabaret.com</a> for more information.</p>
<p>You are always free to <a href="https://adventurecabaret.com/unsubscribe?token=${token}">unsubscribe</a> from our mailing list.</p>
</div>
<div class="footer"></div>
</body>
</html>`;

  return { subject, text, html };

}

module.exports = EmailTemplate;