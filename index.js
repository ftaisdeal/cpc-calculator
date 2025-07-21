const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const path = require('path');
app.use(express.static('public'));
app.set('trust proxy', true);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const basicAuth = require('express-basic-auth');
const port = 3000;

//const Home = require('./pages/Home');
//const Error404 = require('./pages/404');

// Home
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

/* QR
app.get('/qr', 
  basicAuth({
      users: { 'admin': 'firinn' }, // Credentials
      challenge: true, // Prompt the user for credentials
      unauthorizedResponse: 'Unauthorized' // Response for unauthorized users
  }),
  (req, res) => {
    Home(res);
  }
);


// 404 handler
app.use((req, res) => {
  Error404(res);
});

*/

// Start the server
app.listen(port, (err) => {
  if (err) {
    console.error('Failed to start server:', err);
  } else {
    console.log(`Server listening on port ${port}`);
  }
});