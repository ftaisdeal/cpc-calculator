const QR = async function (req, res) {
  const { header, footer } = require('../components');
  const page = parseInt(req.query.page, 10);

  switch (page) {
    case 1:
      title = "QR Code 1";
      text = "Text for QR Code 1";
      break;
    case 2:
      title = "QR Code 2";
      text = "Text for QR Code 2";
      break;
    case 3:
      title = "QR Code 3";
      text = "Text for QR Code 3";
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