const Origins = async function (req, res) {

  const { header, footer } = require('../components');

  const content = `<h1>QR</h1>`;

  res.send(`${header('QR Codes')}
${content}
${footer}`);

}

module.exports = Origins;