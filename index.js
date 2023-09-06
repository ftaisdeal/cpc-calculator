const express = require('express');
const app = express();
app.use(express.static('public'));
const port = 3000;

const Home = require('./pages/Home');
const Error404 = require('./pages/404');

// S T A N D A R D   R O U T E S
// Home
app.get('/', (req, res) => {
  res.setHeader("Cache-Control", "no-cache, must-revalidate");
  Home(res);
});

// 404 handler
app.use(function (req, res, next) {
  Error404(res);
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});