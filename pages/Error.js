"use strict";

const { header } = require('../components');

const Error = function (res, error, message) {

  //sendEmail('firinn@taisdeal.com', 'Sustainable Choices: Error Alert', error, '');

  const content = `<h1>Error</h1>
<p>${message}</p>`;

  res.send(`${header(`'Error: ${message}'`)}
${content}
</div>
</body>
</html>`);

};

module.exports = Error;