const EmailTemplateCast = (first_name) => {

  const subject = `Adventure Cabaret: Message to the Cast - March 6, 2025`;

  const text = `1. Vocal and physical warmup before performance.
  2. Intense focus before the performance, free of all distractions.
  3. In rehearsal on the 16th we will be working exlusively on enhancing and deepening our acting for the next performance and all future performances.
  4. We will discuss how long we want to just perform the show without moving on to new material. You will have the choice of either just performing this first show or performing the first show and working on a new show.
  5. After the March 1st performance, I will resume offering music traning to those who are interested. The plan is to be able to use all of the training in music to add unique music and unique musical performances to future shows.
  6. All of the props and paraphernalia for the show fit in a single large suitcase. Combine that with a small lighting kit, a projector and a screen on a stand, and we will be able to perform the show in any space.
  7. New content for future shows:
  - MadLibs with the audience
  - Discussion segments, with a large red digital timer counting down
  - The actors introduce themselves, with images of their choice on the screen behind them
  8. Green screen shoot for gathering material for marketing. You will also be able to use these recordings for your professional reel.`;

const body = `<p>Keep flexing!</p>

<img src="https://adventurecabaret.com/images/brain-flex.png" width="400" height="181">`;

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