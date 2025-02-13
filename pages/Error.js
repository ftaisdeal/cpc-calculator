"use strict";

const { header } = require('../components');

const Error = (res, message) => {

  const content = `<h1>Error</h1>
<p>${message}</p>`;

  res.send(`${header(`'Error: ${message}'`)}
${content}
</div>
<br>
<br>
<br>
<br>
</body>
</html>`);

};

module.exports = Error;