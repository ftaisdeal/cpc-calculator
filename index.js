require('dotenv').config();

const express = require('express');
const app = express();
app.set('trust proxy', true);
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const port = 3000;
const path = require('path');

const generateQrForUrl = require('./tracking/qr-gen');
const basicAuth = require('express-basic-auth');

const Home = require('./pages/Home');
const Tracking = require('./tracking/Tracking');
const UpdateSources = require('./tracking/UpdateSources');

// Home
app.get('/', async (req, res) => {
  Home(req, res);
});

// Traffic Source Tracking
app.get('/tracking', 
  basicAuth({
      users: { 'admin': 'password' }, // Credentials
      challenge: true, // Prompt the user for credentials
      unauthorizedResponse: 'Unauthorized' // Response for unauthorized users
  }),
  (req, res) => {
    Tracking(req, res);
  }
);

// Update sources to be tracked
app.post('/sources', async (req, res) => {
  UpdateSources(req, res);
});

// Handle form POST for generating QR code
app.post('/generate', async (req, res) => {
  const codeValue = req.body.code;
  if (!codeValue) {
    return res.status(400).send('No code provided!');
  }

  const url = `https://planetatheshow.com?src=${encodeURIComponent(codeValue)}`;
  try {
    const { codesFile, desktopFile } = await generateQrForUrl(url);
    res.sendFile(codesFile);
  } catch (err) {
    res.status(500).send('Error generating QR code: ' + err.message);
  }
});

// 404 handler
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});

// Serve all files in public/docs at /docs route
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