const QR = async function (req, res) {
  const { header, footer } = require('../components');
  const page = parseInt(req.query.page, 10);

  switch (page) {
    case 1:
      title = "QR Code 1";
      text = `Text for QR Code 1
<p>A teaspoon of healthy soil can contain thousands of different species of microorganisms, and a total of A single teaspoon approximately 1 billion to 10 billion organisms. These include bacteria, fungi, protozoa, nematodes, and microarthropods. Contact with organisms typically found in soil is crucial for the development of a healthy immune system in childhood.</p>`;
      break;
    case 2:
      title = "QR Code 2";
      text = `Text for QR Code 2
<p>Bryophytes are a group of non-vascular plants that include mosses, liverworts, and hornworts. Brophytes do not have a vascular system, and this lack of a vascular system strictly limits the size to which they can grow.`;
      break;
    case 3:
      title = "QR Code 3";
      text = `Text for QR Code 3
<p>You are absolutely welcome to take pictures and record video during the performance, but please make sure that the audio on your phone is turned all the way down.  Thank you.`;
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