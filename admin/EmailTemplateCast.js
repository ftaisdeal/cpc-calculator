const EmailTemplateCast = (first_name) => {

  const subject = `Adventure Cabaret: Message to the Cast - February 15, 2025`;

  const text = `Administrative Announcements
1. The t-shirts for performances have been ordered, and will be here in about ten days. The cast made some great choices for the back of the shirts, and it will be a treat for the audience to see these design choices every time any of you turn around on stage, or when you are mingling with the audience at intermission and during the after-party.  You may get questions about the image on your t-shirt, so please be prepared to talk about it if a member of the audience asks you. Also please don't be surprised if a member of the audience addresses you by name, because your first name will be on the back of the shirt in big letters.  The t-shirts will be a great way to build the community aspect of the show, and to make the audience feel that they are part of something special, because they are.

2. The foam core posters for the "audience induction" part of the pre-show have also been ordered, as well as fifty beautiful refrigerator magnets that we will give away at end of the first performance.  We will be giving away both the refrigerator magnets and cards for the show by literally "passing the hat" around to the audience, and the hat will be full of magnets and cards. This is a deliberate "backwardism," because normally the hat is passed around to collect money, but we are using the hat backwards, to give stuff away.  The hat will be one of the production baseball caps, and will be recognized by the the audience as one just used on stage.  The audience will definitely be in a good mood at the end of the show, so giving this stuff away will be a great way to keep the good vibes going.

3. Ticket sales have picked up, and we are only twenty tickets away from selling out the show, with two weeks to go. This first show will definitely sell out, and will probably have a waiting list. Please continue to invite people, because we want to build demand for further performances.

4. Depending on apparent demand for tickets based on the size of the waiting list, let's leave open the possibility of a second performance two weeks after the first, on Saturday, March 15.

5. We are in the process of producing the ad campaign on Instagram, which means that the ads will have run for at least three weeks before the second performance, further increasing demand.

6. If demand for tickets is heavy based on the ad campaign, we may plan for a performance every week, on Saturday evenings. We can't know what demand will be like until we see the results of the ad campaign, but we should be prepared for the possibility of a performance every week.

7. I have added a tracking pixel to the subscriber emails, which will allow us to know how many people are opening the emails. I also added a "read count" to the database, so we will know which people on the subscriber list are reading the emails regularly, presenting an opportunity to reach out to them personally.

8. I built a system for automatically adding to the subscriber list all the email addresses collected from ticket sales for performances, so that we will be able to gradually build a large subscriber list that will help further build the community aspect of the entire production. We want to build genuine relationships with our audience, and the subscriber list is a key part of that.`;

  const body = `<p><b>Administrative Announcements</b></p>
<p>1. The t-shirts for performances have been ordered, and will be here in about ten days. The cast made some great choices for the back of the shirts, and it will be a treat for the audience to see these design choices every time any of you turn around on stage, or when you are mingling with the audience at intermission and during the after-party.  You may get questions about the image on your t-shirt, so please be prepared to talk about it if a member of the audience asks you. Also please don't be surprised if a member of the audience addresses you by name, because your first name will be on the back of the shirt in big letters.  The t-shirts will be a great way to build the community aspect of the show, and to make the audience feel that they are part of something special, because they are.</p>

<p>2. The foam core posters for the "audience induction" part of the pre-show have also been ordered, as well as fifty beautiful refrigerator magnets that we will give away at end of the first performance.  We will be giving away both the refrigerator magnets and cards for the show by literally "passing the hat" around to the audience, and the hat will be full of magnets and cards. This is a deliberate "backwardism," because normally the hat is passed around to collect money, but we are using the hat backwards, to give stuff away.  The hat will be one of the production baseball caps, and will be recognized by the the audience as one just used on stage.  The audience will definitely be in a good mood at the end of the show, so giving this stuff away will be a great way to keep the good vibes going.</p>

<p>3. Ticket sales have picked up, and we are only twenty tickets away from selling out the show, with two weeks to go. This first show will definitely sell out, and will probably have a waiting list. Please continue to invite people, because we want to build demand for further performances.</p>

<p>4. Depending on apparent demand for tickets based on the size of the waiting list, let's leave open the possibility of a second performance two weeks after the first, on Saturday, March 15.</p>

<p>5. We are in the process of producing the ad campaign on Instagram, which means that the ads will have run for at least three weeks before the second performance, further increasing demand.</p>

<p>6. If demand for tickets is heavy based on the ad campaign, we may plan for a performance every week, on Saturday evenings. We can't know what demand will be like until we see the results of the ad campaign, but we should be prepared for the possibility of a performance every week.</p>

<p>7. I have added a tracking pixel to the subscriber emails, which will allow us to know how many people are opening the emails. I also added a "read count" to the database, so we will know which people on the subscriber list are reading the emails regularly, presenting an opportunity to reach out to them personally.</p>

<p>8. I built a system for automatically adding to the subscriber list all the email addresses collected from ticket sales for performances, so that we will be able to gradually build a large subscriber list that will help further build the community aspect of the entire production. We want to build genuine relationships with our audience, and the subscriber list is a key part of that.</p>`;

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