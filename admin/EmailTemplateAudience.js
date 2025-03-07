const EmailTemplateCast = (first_name) => {

  const subject = `Adventure Cabaret: Request for Feedback on First Performance`;

  const text = `Thank you so much for attending the very first performance of Adventure Cabaret!
  
  We're glad you were with us, and we hope you enjoyed the show.
  
  Because Adventure Cabaret is a new and evolving show, we would love to hear your thoughts and feedback.
  
  We would truly appreciate it if you would take a moment to complete a very short (only three quick questions!) survery about your experience at the show:
  
  https://www.proprofs.com/survey/t/?title=anmiw
  
  Thank you so much again. We are actively developing additional shows and would love to have you join us for future performances.`;

const body = `<p>Thank you so much for attending the very first performance of Adventure Cabaret!</p>

<p>We're glad you were with us, and we hope you enjoyed the show.</p>

<p>Because Adventure Cabaret is a new and evolving show, we would love to hear your thoughts and feedback.</p>

<p>We would truly appreciate it if you would take a moment to complete a very short (only three quick questions!) survey about your experience at the show:</p>

<p><a href="https://www.proprofs.com/survey/t/?title=anmiw">https://www.proprofs.com/survey/t/?title=anmiw</a></p>

<p>We are actively developing additional shows and would love to have you join us for future performances.</p>

<p>Thank you so much again!</p>

<br>

<p><img src="https://adventurecabaret.com/images/brain-medium.png" width="300" height="216"></p>

<br>

<small><a href="https://adventurecabaret.com">home</a> | 
<a href="https://adventurecabaret.com/tickets">tickets</a> | 
<a href="/origins">origins</a> | <a href="/rundown">rundown</a> | 
<a href="https://adventurecabaret.com/shows">shows</a> | 
<a href="https://adventurecabaret.com/update">update</a> | 
<a href="https://adventurecabaret.printful.me/product/adventure-cabaret-unisex-t-shirt">store</a> | 
<a href="https://adventurecabaret.com/contact">contact</a></small>`;

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
Dear ${first_name}:
${body}
</div>
<div class="footer"></div>
</body>
</html>`;

  return { subject, text, html };

}

module.exports = EmailTemplateCast;