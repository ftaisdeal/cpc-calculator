const QR = async function (req, res) {

  const { header, footer } = require('../components');

  const page = parseInt(req.query.page, 10);

  let title = "";
  let text = "";

  switch (page) {
    case 1:
      title = "One Teaspoon of Healthy Soil";
      text = `<p>A single teaspoon of healthy soil can contain thousands of different species of microorganisms, and approximately 1 billion to 10 billion organisms in total. These include bacteria, fungi, protozoa, nematodes, and microarthropods.</p>
<p>These organisms play crucial roles in maintaining soil health, cycling nutrients, and even influencing human health—particularly the immune system.</p>
<p>During human childhood, contact with organisms typically found in soil is crucial for the development of a healthy immune system. Reduced exposure (due to urbanization, sanitization, and indoor lifestyles) is linked to an increase in autoimmune diseases and allergies.</p>
<p>Regular contact with soil microbes has been associated with a lower risk of asthma, eczema, and inflammatory disorders.</p>`;
      break;
    case 2:
      title = "Bryophytes";
      text = `<p>Bryophytes are a ubiquitous group of non-vascular plants that include mosses, liverworts, and hornworts.
They are important in ecosystems because they help retain moisture, contribute to soil formation, and act as pioneer species in barren environments.</p>
<p>Brophytes do not have a vascular system, and this lack of a vascular system strictly limits the size to which they can grow. They are among the simplest land plants and are characterized by their lack of true roots, stems, and leaves. Instead, they have structures that serve similar functions, such as rhizoids for anchorage and water absorption.</p>
<h3>Key Features of Bryophytes</h3>
<b>Ecological Importance:</b> They help in soil formation, prevent erosion, and provide habitat for microorganisms. 
<p><b>Non-Vascular:</b> They lack xylem and phloem, which means they rely on diffusion and osmosis for water and nutrient transport.</p>
<p><b>Small and Simple:</b> They are usually small, growing in moist and shady environments.</p>
<p><b>Water-Dependent Reproduction:</b> They need water for sperm to swim to the egg for fertilization.</p>
<p><b>Dessication Tolerance:</b> Mosses have the ability to dry out almost completely, then quickly revive in the presence of moisture.</p>`;
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