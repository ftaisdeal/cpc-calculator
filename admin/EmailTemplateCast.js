const EmailTemplateCast = (first_name) => {

  const subject = `Adventure Cabaret: Message to the Cast`;

  const text = `Some Administrative Announcements
1. On Friday I will be ordering all of the t-shirts to be used in performances. They should arrive in about ten days.

2. The sweatpants for performances I already have, but I want to make sure we have the right sizes for everyone, so I will bring them to rehearsal on Sunday.

3. For the first time, I sent out an email message to the 91 people who had signed up to get email updates. This should generate some ticket sales in the next few days.

4. We will be starting an ad campaign on Instagram on Saturday.  It will consist of videos and image "carousels." This campaign should also boost tickets sales.

5. For rehearsal on Sunday, we will be going through the entire show again, but this time getting all the details right by practicing: entrances, blocking, exits, aspects of performance.

6. I will bring four copies of the complete rundown, including entrances and exits, and we will post these four copies in the backstage area for reference.

See you Sunday!`;

  const body = `<p><b>Some Administrative Announcements</b></p>
<p>1. On Friday I will be ordering all of the t-shirts to be used in performances. They should arrive in about ten days.</p>

<p>2. The sweatpants for performances I already have, but I want to make sure we have the right sizes for everyone, so I will bring them to rehearsal on Sunday.</p>

<p>3. For the first time, I sent out an email message to the 91 people who had signed up to get email updates. This should generate some ticket sales in the next few days.</p>

<p>4. We will be starting an ad campaign on Instagram on Saturday.  It will consist of videos and image "carousels." This campaign should also boost tickets sales.</p>

<p>5. For rehearsal on Sunday, we will be going through the entire show again, but this time getting all the details right by practicing: entrances, blocking, exits, aspects of performance.</p>

<p>6. I will bring four copies of the complete rundown, including entrances and exits, and we will post these four copies in the backstage area for reference.</p>

See you Sunday!

<p>We need to keep flexing our minds to create the best show possible!</p>
<p><img src="https://adventurecabaret.com/images/brain-flex.png" alt="Adventure Cabaret brain" width="400" height="181"></p>
<p>May the beautiful Linky Pinky be always with you!</p>
<p><img src="https://adventurecabaret.com/images/hand-colored.png" alt="Adventure Cabaret colored hand" width="200" height="313">`;

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