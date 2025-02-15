const EmailTemplateCast = (first_name) => {

  const subject = `Adventure Cabaret: Message to the Cast - February 14, 2025`;

  const text = `Administrative Announcements
1. The t-shirts for performances have been ordered, and will be here in about ten days.

2. Ticket sales have picked up, and we are only twenty tickets away from selling out the show, with two weeks to go. This first show will definitely sell out, and will probably have a waiting list.

3. Depending on apparent demand for tickets based on the size of the waiing list, let's leave open the possibility of a second performance two weeks after the first, which means on Saturday, March 15.

4. We are in the process of producing the ad campaign on Instagram, which means that the ads will have run for at least three weeks before the second performance, further increasing demand.

5. If demand for tickets is heavy based on the ad campaign, we may plan for a performance every week, on Saturday evenings.

6. I have added a tracking pixel to the subscriber emails, which will allow us to know how many people are opening the emails.`;

  const body = ``;

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
${first_name}:
${body}
</div>
<div class="footer"></div>
</body>
</html>`;

  return { subject, text, html };

}

module.exports = EmailTemplateCast;