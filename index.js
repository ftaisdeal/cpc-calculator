const express = require('express');
const app = express();
app.set('trust proxy', true);
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const port = 3000;
const path = require('path');
const basicAuth = require('express-basic-auth');

const Home = require('./pages/Home');
const QR = require('./qr/QR');

// Home
app.get('/', (req, res) => {
  Home(req, res);
});

// QR Tracking
app.get('/qrtracking', 
  basicAuth({
      users: { 'admin': 'firinn' }, // Credentials
      challenge: true, // Prompt the user for credentials
      unauthorizedResponse: 'Unauthorized' // Response for unauthorized users
  }),
  (req, res) => {
    QR(req, res);
  }
);

// 404 handler
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});

// Serve all files in public/pdfs at /pdfs route
app.use('/docs', express.static(path.join(__dirname, 'public/docs')));

// Error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Error 500');
});

app.listen(port, (err) => {
  if (err) {
    console.error('Failed to start server:', err);
  } else {
    console.log(`Server listening on port ${port}`);
  }
});