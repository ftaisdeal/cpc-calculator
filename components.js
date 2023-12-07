const header = function (title = "Adventure Cabaret", short_description = "Adventure Cabaret is a live multitalent, multimedia show that recruits local talent of all kinds and weaves different types of live performance together into a compelling set of deep experiences that also include audience participation in varied ways.", og_image = "/OG-default.png") {

  return (`<!DOCTYPE HTML>
<html lang="en">
<head>
<meta charset="utf-8">
<title>${title}</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="icon" type="image/png" href="/favicon.png" sizes="140x140">
<meta name="description" content="${short_description}">
<meta property="og:type" content="article">
<meta property="og:title" content="${title}">
<meta property="og:description" content="${short_description}">
<meta property="og:site_name" content="Adventure Cabaret">
<meta property="og:image" content="${og_image}">
<meta property="og:image:type" content="image/jpg">
<meta property="og:image:width" content="600">
<meta property="og:image:height" content="600">
<meta property="og:url" content="">
<meta property="article:published_time" content="2023-09-08">
<meta name="author" content="Miranda Sorventi">
<link rel="stylesheet" href="/styles.css">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Nothing+You+Could+Do&display=swap" rel="stylesheet">
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-5D9KCKLW5T"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-5D9KCKLW5T');
</script>
</head>
<body>
<div id="container" class="container">
<div class="header">
<span class="title"><a href="/"><span style="color:#674ea7;">A</span><span style="color:#6aa84f;">d<span><span style="color:#e06666;">v<span><span style="color:#ffd966;">e<span><span style="color:#3c78d8;">n<span><span style="color:#38761;">t<span><span style="color:#a64d78;">u<span><span style="color:#dd7e6b;">r<span><span style="color:#a4c2f4;">e<span> <span style="color:#cd4025;">C</span><span style="color:#fff;">abaret</span></a></span>
<p class="sub-title">Prepare to be transformed.</p>
<nav>
<a href="/">home</a> <span class="colon">:</span> <a href="/about">about</a> <span class="colon">:</span> <a href="/rundown">rundown</a> <span class="colon">:</span> <a href="https://www.eventbrite.com/e/714765271167?aff=oddtdtcreator">tickets</a> <span class="colon">:</span> <a href="/shows">shows</a> <span class="colon">:</span> <a href="/contact">contact</a>
</nav>
</div>`);
}

const footer = `</div>
</body>
</html>`;

exports = module.exports = { header, footer };
