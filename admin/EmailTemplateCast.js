const EmailTemplateCast = (first_name) => {

  const subject = `Adventure Cabaret: Message to the Cast - February 24, 2025`;

  const text = `1. I know that rehearsal yesterday was full of moments of tension, but that is normal as we approach the first performance. We now have only five days to prepare for doing a great show on Saturday. Let's all focus intensely, work smart and get the job done this week.

2. Your personalized t-shirts arrive on Wednesday, so I will be handing them out at rehearsal on Friday. The foamcore 11x17 posters also arrive this week, and we will go over the "audience induction" plan for the show during rehearsal on Friday as well.  It's pretty simple. Most of all we have to have the spirit of fun and adventure in our hearts as we greet the audience for the first time.

3. I will be cleaning the entire theater on Friday before rehearsal, part of which means thoroughly vacuuming the backstage area, and cleaning the shelves below the mirrors with a sponge.

4. The new multimedia file for Friday rehearsal will include many more audio cues for the segments, which you will hear over the audio system. This will help to make the entrances more precise.

5. This is for the future, but Paula brought up the wonderful idea of taking a four-day weekend trip to LA and doing the show on a Friday and Saturday night in LA. We would rent a big van and all drive down together in the van, and either rent a big house or all stay in the same hotel together. I think this is a great idea, and we might be able to do this as soon as June. Let's plan for it!

6. See you tonight at 7:30 for rehearsal by video: https://meet.google.com/cxn-xaxm-mng

Thanks!`;

const body = `<p>1. I know that rehearsal yesterday was full of moments of tension, but that is normal as we approach the first performance. We now have only five days to prepare for doing a great show on Saturday. Let's all focus intensely, work smart and get the job done this week.</p>

<p>2. Your personalized t-shirts arrive on Wednesday, so I will be handing them out at rehearsal on Friday. The foamcore 11x17 posters also arrive this week, and we will go over the "audience induction" plan for the show during rehearsal on Friday as well.  It's pretty simple. Most of all we have to have the spirit of fun and adventure in our hearts as we greet the audience for the first time.</p>

<p>3. I will be cleaning the entire theater on Friday before rehearsal, part of which means thoroughly vacuuming the backstage area, and cleaning the shelves below the mirrors with a sponge.</p>

<p>4. The new multimedia file for Friday rehearsal will include many more audio cues for the segments, which you will hear over the audio system. This will help to make the entrances more precise.</p>

<p>5. This is for the future, but Paula brought up the wonderful idea of taking a four-day weekend trip to LA and doing the show on a Friday and Saturday night in LA. We would rent a big van and all drive down together in the van, and either rent a big house or all stay in the same hotel together. I think this is a great idea, and we might be able to do this as soon as June. Let's plan for it!</p>

<p>6. See you tonight at 7:30 for rehearsal by video:</p>

<p><a href="https://meet.google.com/cxn-xaxm-mng">https://meet.google.com/cxn-xaxm-mng</a></p>

<p>Keep flexing!</p>

<br>

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