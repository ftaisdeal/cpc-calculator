const Origins = async function (res) {

  const { header, footer } = require('../components');

  const content = `<h1>QR</h1>
`;

  res.send(`${header('Media Kit for Adventure Cabaret')}
${content}
${footer}`);

}

module.exports = Origins;