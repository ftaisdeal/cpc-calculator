const EmailTemplateCast = (first_name) => {

  const subject = `Adventure Cabaret: Message to the Cast - February 17, 2025`;

  const text = `It's Crunch Time, Folks
  1. We are now only 12 days away from the first performance. We need to be making substantial progress every day.  That means progress on completely mastering your lines.  If you still do not know all your lines accurately, completely and confidently, the most important thing you can do is to immediately adopt methods that will help you to achieve complete mastery:
  
  - ALWAYS look away from the script when you speak your lines.
  - Lock in the words by linking them to gestures and movements.
  - Study the exact wording, and take an interest in all the details of the text.
  - Notice the formatting, such as italics, think about what it means, and match your expression to the meaning.
  - Think about which words carry the most meaning in a sentence, and emphasize those words.
  - The more expression you bring to the text, the more natural and easy it will be for you to remember the text accurately and without effort.

  This coming Sunday is the last time you will be able to call out "line."  After that, you will be expected to know your lines perfectly.
  
  2. We are going to have an online rehearsal on Wednesday, 7:00-7:30pm.  This is specifically to completely master the two largest ensembles scenes, "Invite an Insight," and the Finale.  Please be prepared to be on time and to concentrate completely.  We will be meeting at the usual Google Meet URL:
  
  https://meet.google.com/cxn-xaxm-mng
  
  3. If you want more time with me or with anyone else in the cast, please ask immediately. I am happy to help you in any way I can. I am available to have a video meeting with you, have a phone call, or exchange messages or email. Please do not hesitate to ask for help.  I am here to help you.
  
  Talk with you soon.`;

  const body = `<p><b>It's Crunch Time, Folks</b></p>
<p>1. We are now only 12 days away from the first performance. We need to be making substantial progress every day.  That means progress on completely mastering your lines.  If you still do not know all your lines accurately, completely and confidently, the most important thing you can do is to immediately adopt methods that will help you to achieve complete mastery:</p>
  
- ALWAYS look away from the script when you speak your lines.
<br>- Lock in the words by linking them to gestures and movements.
<br>- Study the exact wording, and take an interest in all the details of the text.
<br>- Notice the formatting, such as italics, think about what it means, and match your expression to the meaning.
<br>- Think about which words carry the most meaning in a sentence, and emphasize those words.
<br>- The more expression you bring to the text, the more natural and easy it will be for you to remember the text accurately and without effort.

<p>This coming Sunday is the last time you will be able to call out "line."  After that, you will be expected to know your lines perfectly.</p>
  
<p>2. We are going to have an online rehearsal on Wednesday, 7:00-7:30pm.  This is specifically to completely master the two largest ensembles scenes, "Invite an Insight," and the Finale.  Please be prepared to be on time and to concentrate completely. We will be meeting at the usual Google Meet URL:</p>
  
<a href="https://meet.google.com/cxn-xaxm-mng">https://meet.google.com/cxn-xaxm-mng</a>
  
<p>3. If you want more time with me or with anyone else in the cast, please ask immediately. I am happy to help you in any way I can. I am available to have a video meeting with you, have a phone call, or exchange messages or email. Please do not hesitate to ask for help.  I am here to help you.</p>

<p>Talk with you soon.</p>

<p>Stay strong!  I love you guys!</p>

<img src="https://adventurecabaret.com/images/brain-flex.png" width="400" height="181">

`;

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