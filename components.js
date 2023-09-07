const header = function (title = "Adventure Cabaret", short_description = "Adventure Cabaret", og_image = "/img/OG-default.png", google_translate = "") {

  return (`<!DOCTYPE HTML>
<html lang="en">
<head>
<meta charset="utf-8">
<title>${title}</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="description" content="${short_description}">
<meta property="og:type" content="article">
<meta property="og:title" content="${title}">
<meta property="og:description" content="${short_description}">
<meta property="og:site_name" content="Sustainable Choices">
<meta property="og:image" content="${og_image}">
<meta property="og:image:type" content="image/jpg">
<meta property="og:image:width" content="600">
<meta property="og:image:height" content="600">
<meta property="og:url" content="">
<meta property="article:published_time" content="2023-07-01">
<meta name="author" content="Firinn Taisdeal">
<meta name="theme-color" content="#444444">
<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon">
<link rel="icon" href="/apple-touch-icon.png" type="image/png" sizes="192x192">
<link rel="apple-touch-icon" href="/apple-touch-icon.png" type="image/png">
<link rel="stylesheet" href="/styles.css">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Nothing+You+Could+Do&display=swap" rel="stylesheet">
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-BZ4Q6SY3KL');
</script>
</head>
<body>
<div id="container" class="container">
<div class="header">
<a href="/home"><p class="title"><span style="color:#674ea7;">A</span><span style="color:#6aa84f;">d<span><span style="color:#e06666;">v<span><span style="color:#ffd966;">e<span><span style="color:#3c78d8;">n<span><span style="color:#38761;">t<span><span style="color:#a64d78;">u<span><span style="color:#dd7e6b;">r<span><span style="color:#a4c2f4;">e<span> <span style="color:#cd4025;">C</span><span style="color:#fff;">abaret</span></p></a>
Prepare to be transformed.
<nav>
<a href="/">home</a> <span class="colon">:</span> <a href="/about">about</a> <span class="colon">:</span> <a href="/shows">upcoming shows</a> <span class="colon">:</span> <a href="/contact">contact</a>
</nav>
</div>`);
}

const footer = `</div>
</body>
</html>`;

exports = module.exports = { header, footer };
