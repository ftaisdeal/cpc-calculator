const QR = async function (req, res) {

  const { header, footer } = require('../components');

  const page = parseInt(req.query.page, 10);

  switch (page) {
    case 1:
      title = "One Teaspoon of Healthy Soil";
      text = `<p>A single teaspoon of healthy soil can contain thousands of different species of microorganisms, and a total of A single teaspoon approximately 1 billion to 10 billion organisms. These include bacteria, fungi, protozoa, nematodes, and microarthropods. During human childhood, ontact with organisms typically found in soil is crucial for the development of a healthy immune system.</p>`;
      break;
    case 2:
      title = "Bryophytes Are Important";
      text = `<p>Bryophytes are a ubiquitous group of non-vascular plants that include mosses, liverworts, and hornworts. Brophytes do not have a vascular system, and this lack of a vascular system strictly limits the size to which they can grow.</p>`;
      break;
    case 3:
      title = "Please Turn Off the Audio on Your Phone";
      text = `<p>You are absolutely welcome to take pictures and record video during the performance, but please make sure that the audio on your phone is turned all the way down.</p>
      <p>Thank you.</p>
      <br>
      <span style="font-size: 72px;">🤠</span>`;
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