const EmailTemplate = (first_name) => {

  if (first_name !== '') {
    let salutation = `Dear ${first_name}`;
  }

  const message = `<html>
  <head>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Nothing+You+Could+Do&display=swap" rel="stylesheet">
  <style>
  body {
  font-family: Verdana, Arial, sans-serif;
  font-size: 1em;
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
  a {
    text-decoration: none;
  }
  .footer {
    background-color: #8a8;
    padding: 10px;
  }
  </style>
  </head>
  <body>
  <div class="header">
  <span class="title"> <a href="https://adventurecabaret.com"><span style="color:#674ea7;">A</span><span style="color:#6aa84f;">d<span><span style="color:#e06666;">v<span><span style="color:#ffd966;">e<span><span style="color:#3c78d8;">n<span><span style="color:#38761;">t<span><span style="color:#a64d78;">u<span><span style="color:#dd7e6b;">r<span><span style="color:#a4c2f4;">e<span> <span style="color:#cd4025;">C</span><span style="color:#fff;">abaret</span></a></span>
  </div>
  <p>${salutation}</p>
  <p><a href="https://adventurecabaret.com">https://adventurecabaret.com</a></p>
  <br>
  <div class="footer">
  </div>
  </body>
  </html>`;

  return message;

}

module.exports = EmailTemplate;