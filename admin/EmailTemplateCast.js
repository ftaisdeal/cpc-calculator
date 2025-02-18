const EmailTemplateCast = (first_name) => {

  const subject = `Adventure Cabaret: Message to the Cast - February 17, 2025`;

  const text = `Good News!
1. Ticket sales are up strongly. We are now only 13 tickets away from selling out the first performance, so this first performance is definitely going to be sold out, and probably with a waiting list that can be rolled over into additional performances.

2. The QR code in the poster outside the building is working, and we are getting significant traffic from that one QR code.  Imagine if we had a few hundred posters all over San Francisco. No problem selling out lots of performances, even at larger theaters, and then you get paid really well.

2. I've hired Beth Cockrell at Phoenix as lighting designer, and Beth will be working with us this Sunday for the first tech rehearsal. Beth is a very experienced lighting designer, and I'm excited to have her on board.

3. We now have a "program" for the show consistently of truly challenging questions. This will set the mood for the show from the very beginning, and also become a valuable souvenir for the audience to take home: https://adventurecabaret.com/files/Program.pdf

4. Pre-show roles:
Anhelina - First greeter, just inside the door of the building. Expert in Linky Pinky introductions.
Luke - Second greeter, just outside the elevator door in the lobby. Expert in the Linky Pinky and soil biology.
Paula - Third greeter, just outside the 6th floor elevator doors. World expert in Calypso Linky Pinky and bryophytes.
Cynthia and Jacob - Fourth and fifth greeters, just inside the lobby. Experts in the Linky Pinky, handing out programs and friendly conversation.
Joshua - Sixth greeter, just inside the theater. Expert in the Linky Pinky, friendly conversation, and helping people choose a seat.

6. The Adventure Cabaret store now has t-shirts and sweatshirts available, printed on both sides, with a big image of the colorful brain on the back: https://adventurecabaret.printful.me/

5. We got some hits directly from ChatGPT, definitely because some people were asking ChatGPT "What the hell is this Adventure Cabaret thing?" Ha ha ha! I love it!`;

const body = `<p><b>Good News!</b></p>
<p>1. Ticket sales are up strongly. We are now only 13 tickets away from selling out the first performance, so this first performance is definitely going to be sold out, and probably with a waiting list that can be rolled over into additional performances.</p>

<p>2. The QR code in the poster outside the building is working, and we are getting significant traffic from that one QR code.  Imagine if we had a few hundred posters all over San Francisco. No problem selling out lots of performances, even at larger theaters, and then you get paid really well.</p>

<p>2. I've hired Beth Cockrell at Phoenix as lighting designer, and Beth will be working with us this Sunday for the first tech rehearsal. Beth is a very experienced lighting designer, and I'm excited to have her on board.</p>

<p>3. We now have a "program" for the show consistently of truly challenging moral questions. This will set the mood for the show from the very beginning, and also become a valuable souvenir for the audience to take home: <a href="https://adventurecabaret.com/files/Program.pdf">https://adventurecabaret.com/files/Program.pdf</a></p>

<p>4. Pre-show roles:
<br><b>Anhelina</b> - First greeter, just inside the door of the building. Expert in Linky Pinky introductions and friendly conversation.
<br><b>Luke</b> - Second greeter, just outside the elevator door in the lobby. Expert in the Linky Pinky, friendly conversation, and soil biology.
<br><b>Paula</b> - Third greeter, just outside the 6th floor elevator doors. World expert in Calypso Linky Pinky, friendly conversation, and bryophytes.
<br><b>Cynthia</b> and <b>Jacob</b> - Fourth and fifth greeters, just inside the lobby. Experts in the Linky Pinky, friendly conversation, and handing out programs.
<br><b>Joshua</b> - Sixth greeter, just inside the theater. Expert in the Linky Pinky, friendly conversation, and helping people choose a seat.</p>

<p>5. The Adventure Cabaret store now has t-shirts and sweatshirts available, printed on both sides, with a big image of the colorful brain on the back: <a href="https://adventurecabaret.printful.me/">https://adventurecabaret.printful.me/</a></p>

<p>6. We got some hits directly from ChatGPT, definitely because some people were asking ChatGPT "What the hell is this Adventure Cabaret thing?" Ha ha ha! I love it!</p>

<p>Keep flexing!</p>

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