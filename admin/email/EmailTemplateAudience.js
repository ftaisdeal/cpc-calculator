const EmailTemplateCast = (first_name) => {

  const subject = `Adventure Cabaret: `;

  const text = ``;

  const body = `<p><img src="https://adventurecabaret.com/images/brain-medium.png" width="300" height="216"></p>`;

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
h4 {
  margin-bottom: 4px;
}
.header {
  background-color: black;
  padding: 10px;
}
.title {
  font-size: 3.5em;
  font-family: Papyrus, 'Nothing You Could Do', fantasy;
  line-height: normal;
}
.sub-title {
  color: #fff;
  font-size: 1em;
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
  padding: 6px;
}
</style>
</head>
<body>
<div class="header">
<span class="title"> <a href="https://adventurecabaret.com"><span style="color:#674ea7;">A</span><span style="color:#6aa84f;">d<span><span style="color:#e06666;">v<span><span style="color:#ffd966;">e<span><span style="color:#3c78d8;">n<span><span style="color:#38761;">t<span><span style="color:#a64d78;">u<span><span style="color:#dd7e6b;">r<span><span style="color:#a4c2f4;">e<span> <span style="color:#cd4025;">C</span><span style="color:#fff;">abaret</span></a></span>
<br>
<span class="sub-title">Better living through actual thinking.</span>
</div>
<div class="content">
Dear ${first_name}:
${body}
</div>
<div class="footer">
<a href="https://adventurecabaret.com" class="nav-link">home</a> | 
<a href="https://adventurecabaret.com/tickets" class="nav-link">tickets</a> | 
<a href="/origins" class="nav-link">origins</a> | 
<a href="/rundown" class="nav-link">rundown</a> | 
<a href="https://adventurecabaret.com/shows" class="nav-link">shows</a> | 
<a href="https://adventurecabaret.com/update" class="nav-link">update</a> | 
<a href="https://adventurecabaret.printful.me/product/adventure-cabaret-unisex-t-shirt" class="nav-link">store</a> | 
<a href="https://adventurecabaret.com/casting" class="nav-link">casting</a> | 
<a href="https://adventurecabaret.com/contact" class="nav-link">contact</a>
</div>
</body>
</html>`;

  return { subject, text, html };

}

module.exports = EmailTemplateCast;