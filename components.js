const header = function (title = "Adventure Cabaret", short_description = "Adventure Cabaret is a unique theater experience, combining live actors with immersive multimedia: a journey through the Empire of the Mind, an escape from the prison of nostalgia, an exploration of how much better humanity could become.", og_image = "/OG-default.png") {

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
<span class="title"><a href="/"><span style="color:#674ea7;">A</span><span style="color:#6aa84f;">d<span><span style="color:#e06666;">v<span><span style="color:#ffd966;">e<span><span style="color:#3c78d8;">n<span><span style="color:#38761d;">t<span><span style="color:#a64d78;">u<span><span style="color:#dd7e6b;">r<span><span style="color:#a4c2f4;">e<span> <span style="color:#cd4025;">C</span><span style="color:#fff;">abaret</span></a></span>
<br>
<span class="sub-title">an experience like no other</span>
<p>
<nav class="navbar">
<a href="/" class="navbar-brand"><span class="home" style="color:#674ea7;">A</span><span class="home" style="color:#cd4025;">C</span></a>
<ul class="navbar-nav">
  <li class="nav-item">
    <a href="/origins" class="nav-link">origins</a>
  </li>
  <li class="nav-item">
    <a href="/rundown" class="nav-link">rundown</a>
  </li>
  <li class="nav-item">
    <a href="/shows" class="nav-link">shows</a>
  </li>
  <li class="nav-item">
    <a href="/update" class="nav-link">update</a>
  </li>
  <li class="nav-item">
    <a href="/tickets" class="nav-link">tickets</a>
  </li>
  <li class="nav-item">
    <a href="https://www.youtube.com/@AdventureCabaret" class="nav-link" target="__blank">YouTube</a>
  </li>
  <li class="nav-item">
    <a href="/contact" class="nav-link">contact</a>
  </li>
</ul>
<div class="hamburger-menu" onclick="toggleMenu()">
  <div class="bar"></div>
  <div class="bar"></div>
  <div class="bar"></div>
</div>
</nav>
</p>
<script>
function toggleMenu() {
  const navbarNav = document.querySelector('.navbar-nav');
  navbarNav.classList.toggle('active');
}
</script>
</div>`);
}

const footer = `</div>
</body>
</html>`;

exports = module.exports = { header, footer };
