const EmailTemplateCast = (first_name) => {

  // Remember to change the date in the subject line
  const subject = `Adventure Cabaret: Message to the Cast - March 23, 2025`;

  const text = `Another quick but important update:
  
April 5th Performance
Ticket sales are picking up, so I'm sure we will have another sold out show for April 5. I am offering a few complimentary tickets strategically in order to promote the show. It is also possible that a few critics will be at the next performance, because I will be inviting them on comp tickets. We need to be at our best, which means we have to prepare thoroughly and meticulously. Here is the plan for the next rehearsal:

Rehearsal March 30, 12-4pm
1. Finalize the sequence for warming up for performances and practice it.
2. Run through the entire show, with emphasis on getting all the details right, and on complete accuracy in wording.
3. If there is time, we will try out some new material.
4. If there is time, we will do some musical training.

Please Review the Script
In the first performance, most of us drifted from the script. That's understandable in a first performance when we are excited and nervous, but we have to move back toward much greater accuracy in the wording. Please review the script and make sure you know your lines word for word. If you have any questions about the script, please ask me. 
  
Possible Cast Change
An excellent actor who was part of the original pilot will probably be replacing me in performances.  His name is Amosi Morgan, and he is muscially gifted, and also has the ability to learn a part word for word at astonishing speed.  Amosi would be a great addition to the cast, and I am sure you would enjoy working with him.

Walkthrough of Major Venues
On Thursday I will be getting a walkthrough of two major venues we might perform in if demand kicks in the way we want it to kick in. The venues are Brava Theater and the Victoria Theater. These are both great venues, with excellent stages, seating, projection and sound systems. I will take pictures and record a video walkthough from the stage, and post these online fo you.

Thanks, and see you on Sunday, March 30.`;

  const body = `<p>Another quick but important update:</p>

  <p><b>April 5th Performance</b><br>
Ticket sales are picking up, so I'm sure we will have another sold out show for April 5. I am offering a few complimentary tickets strategically in order to promote the show. It is also possible that a few critics will be at the next performance, because I will be inviting them on comp tickets. We need to be at our best, which means we have to prepare thoroughly and meticulously. Here is the plan for the next rehearsal:</p>

<p><b>Rehearsal March 30, 12-4pm</b><br>
1. Finalize the sequence for warming up for performances and practice it.<br>
2. Run through the entire show, with emphasis on getting all the details right, and on complete accuracy in wording.<br>
3. If there is time, we will try out some new material.<br>
4. If there is time, we will do some musical training.</p>

<p><b>Please Review the Script</b><br>
In the first performance, most of us drifted from the script. That's understandable in a first performance when we are excited and nervous, but we have to move back toward much greater accuracy in the wording. Please review the script and make sure you know your lines word for word. If you have any questions about the script, please ask me.</p>

<p><b>Possible Cast Change</b><br>
An excellent actor who was part of the original pilot will probably be replacing me in performances.  His name is Amosi Morgan, and he is muscially gifted, and also has the ability to learn a part word for word at astonishing speed.  Amosi would be a great addition to the cast, and I am sure you would enjoy working with him.</p>

<p><b>Walkthrough of Major Venues</b><br>
On Thursday I will be getting a walkthrough of two major venues we might perform in if demand kicks in the way we want it to kick in. The venues are Brava Theater and the Victoria Theater. These are both great venues with excellent stages, seating, projection and sound systems. I will take pictures and record a video walkthough from the stage, and post these online for you.<p>

<p>Thanks, and see you on Sunday, March 30.</p>`;

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
${first_name}:
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