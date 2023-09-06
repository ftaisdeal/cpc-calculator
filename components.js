const header = function (title = "Sustainable Choices", short_description = "Sustainable Choices is a web app that helps you make sustainable choices in your life.", og_image = "/img/OG-default.png", google_translate = "") {

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
<div class="nav">
<nav id="navigation">
  <label id="hamburger-menu-label" for="hamburger-menu-checkbox" tabindex="0">
    <img class="hamburger-menu-icon" src="/img/hamburger-menu-icon.png" alt="hamburger menu">
  </label>
  <input class="hidden-menu-toggle" id="hamburger-menu-checkbox" type="checkbox">
  <div class="menu">
  <ul>
  <li class="has-submenu">
    <input class="hidden-submenu-toggle" type="checkbox" id="about-submenu-toggle">
    <label class="has-submenu-label" for="about-submenu-toggle">about</label>
    <ul class="submenu" id="about-submenu">
      <li><a href="/mission">mission</a></li>
      <li><a href="/howto">how to</a></li>
      <li><a href="/who">who</a></li>
      <li><a href="/plans">plans</a></li>
      <li><a href="/headquarters">headquarters</a></li>
    </ul>
  </li>
  </ul>
  </div>
</nav>
</div>
</div>`);
}

const footer = `<div id="top-button"></div>
</div>
</body>
</html>`;

exports = module.exports = { header, footer };
