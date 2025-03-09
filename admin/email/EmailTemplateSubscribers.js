const EmailTemplate = (first_name, token) => {

  const subject = `Adventure Cabaret Newsletter`;

  const text = `Great news!  We had a tremendously successful opening night on March 1: a sold out show, great performances and an enthusiastic and appreciative audience.  The show was also a party with the cast, at both intermission and after the performance.  We all had a wonderful time.

A second performance is scheduled for March 22nd at Phoenix Theater, and you can buy tickets directly on the Adventure Cabaret website:

https://adventurecabaret.com/tickets

Adventure Cabaret is not just a show, but an ongoing series of adventures in great ideas, creativity, courage and community.  That means real community, in person and off our electronic devices.

We will continue to perform our first production "Metanoia" for a few months, but we are also working on a second production consisting exclusively of dramatic ensemble scenes and monologues.  Further plans include a show with live music and discussion segments with the audience, on a range of deep topics.

Because demand for performances has been so strong, we are planning on moving into a larger theater beginning in April.

We hope to see at one of our performances!`;

  const body = `<p>Great news!  We had a tremendously successful opening night on March 1: a sold out show, great performances and an enthusiastic and appreciative audience.  The show was also a party with the cast, at both intermission and after the performance.  We all had a wonderful time.</p>

<p>A second performance is scheduled for March 22nd at Phoenix Theater, and you can buy tickets directly on the Adventure Cabaret website:</p>

<p><a href="https://adventurecabaret.com/tickets">https://adventurecabaret.com/tickets</a></p>

<p>Adventure Cabaret is not just a show, but an ongoing series of adventures in great ideas, creativity, courage and community.  That means real community, in person and off our electronic devices.</p>

<p>We will continue to perform our first production "Metanoia" for a few months, but we are also working on a second production consisting exclusively of dramatic ensemble scenes and monologues.  Further plans include a show with live music and discussion segments with the audience, on a range of deep topics.</p>

<p>Because demand for performances has been so strong, we are planning on moving into a larger theater beginning in April.</p>

<p>We hope to see at one of our performances!</p>`;

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
.nav-link {
  color: #ddd;
  font-size: .8em;
  text-decoration: none;
  transition: color 0.2s ease;
  padding: 0 4px;
}
.nav-link:hover {
  color: #fff;
}
.footer {
  background-color: #8a8;
  padding: 8px;
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
<img src="https://adventurecabaret.com/images/brain-medium.png" width="300" height="216" style="padding: 20px;">
<img src="https://adventurecabaret.com/email_tracking?token=${token}" alt="pixel" width="1" height="1">
<div class="footer">
<a href="https://adventurecabaret.com" class="nav-link">home</a> | 
<a href="https://adventurecabaret.com/tickets" class="nav-link">tickets</a> | 
<a href="/origins" class="nav-link">origins</a> | 
<a href="/rundown" class="nav-link">rundown</a> | 
<a href="https://adventurecabaret.com/shows" class="nav-link">shows</a> | 
<a href="https://adventurecabaret.com/update" class="nav-link">update</a> | 
<a href="https://adventurecabaret.printful.me/product/adventure-cabaret-unisex-t-shirt" class="nav-link">store</a> | 
<a href="https://adventurecabaret.com/contact" class="nav-link">contact</a>
</div>
</body>
</html>`;

  return { subject, text, html };

}

module.exports = EmailTemplate;