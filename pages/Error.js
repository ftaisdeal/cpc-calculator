"use strict";

const { header } = require('../components');

const Error = function (res, error, message) {

  const content = `<h1>Error</h1>
<p>${message}</p>`;

  res.send(`${header(`'Error: ${message}'`)}
${content}
</div>
</body>
</html>`);

};

module.exports = Error;