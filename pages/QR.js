const QR = async function (req, res) {

  const { header, footer } = require('../components');

  const page = parseInt(req.query.page, 10);

  let title = '';
  let text = '';

  switch (page) {
    case 1:
      title = '';
      text = ``;
      break;

    case 2:
      title = '';
      text = ``;
      break;

    default:
      title = "No QR Code Specified";
  } 

  const content = `<h1>${title}</h1>
  ${text}`;

  res.send(`${header(`${title}`)}
${content}
${footer}`);

}

module.exports = QR;