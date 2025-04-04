const EmailAdd = async function (res) {

  res.send(`<!DOCTYPE HTML>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Add Email</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="/styles.css">
</head>
<body>
<div id="container" class="container">
<div class="header">
<br>
<span class="title"><a href="/"><span style="color:#674ea7;">A</span><span style="color:#6aa84f;">d<span><span style="color:#e06666;">v<span><span style="color:#ffd966;">e<span><span style="color:#3c78d8;">n<span><span style="color:#38761d;">t<span><span style="color:#a64d78;">u<span><span style="color:#dd7e6b;">r<span><span style="color:#a4c2f4;">e<span> <span style="color:#cd4025;">C</span><span style="color:#fff;">abaret</span></a></span>
<p>
<h4>Stay in touch by email</h4>
<form action="email" method="post">
<input type="email" name="email" class="email" placeholder="enter email to stay in touch">
<input type="email" name="liame" style="width: 28ch; padding: 6px; border-radius:4px;" placeholder="enter email to stay in touch" required> <button type="submit" class="button">send</button>
</form>
</p>
</div>
</div>
</body>
</html>`);

}

module.exports = EmailAdd;