require('dotenv').config();

const express = require('express');
const app = express();
app.set('trust proxy', true);
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const port = process.env.PORT || 3000;

const path = require('path');

const { generateQrForUrl, handleQrGeneration } = require('./tracking/qr-generator');
const basicAuth = require('express-basic-auth');

const Home = require('./pages/Home');
const Tracking = require('./tracking/Tracking');
const UpdateSources = require('./tracking/UpdateSources');
const ipLocations = require('./tracking/ip-locations');

// Basic auth configuration
const basicAuthConfig = {
  users: { [process.env.ADMIN_USER || 'admin']: process.env.ADMIN_PASSWORD || 'password' },
  challenge: true,
  unauthorizedResponse: 'Unauthorized'
};

// Request logging middleware
app.use((req, res, next) => {
  // Only log non-static file requests
  if (!req.url.match(/\.(css|js|png|jpg|jpeg|gif|ico|woff|woff2|ttf|eot|svg|pdf|mp3|mp4)$/)) {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  }
  next();
});

// Home
app.get('/', (req, res) => {
  Home(req, res);
});

// CPC Calculator
app.get('/tracking', 
  basicAuth(basicAuthConfig),
  (req, res) => {
    Tracking(req, res);
  }
);

// Update sources to be tracked
app.post('/sources', (req, res) => {
  UpdateSources(req, res);
});

// Handle form POST for generating QR code
app.post('/generate', (req, res) => {
  handleQrGeneration(req, res);
});

// Handle IP location lookup
app.post('/ip-locations', 
  basicAuth(basicAuthConfig),
  ipLocations
);

// Error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Error 500');
});

// 404 handler
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});

// Serve all files in public/docs at /docs route
app.use('/docs', express.static(path.join(__dirname, 'public/docs')));

let server;

// Store the server instance
server = app.listen(port, (err) => {
  if (err) {
    console.error('Failed to start server:', err);
  } else {
    console.log(`Server listening on port ${port}`);
  }
});

// Enhanced graceful shutdown
function gracefulShutdown(signal) {
  console.log(`Received ${signal}, shutting down gracefully`);
  
  // Stop accepting new connections
  server.close(() => {
    console.log('HTTP server closed');
    
    // Close database connections, cleanup resources, etc.
    process.exit(0);
  });
  
  // Force shutdown after 10 seconds if graceful shutdown fails
  setTimeout(() => {
    console.error('Could not close connections in time, forcefully shutting down');
    process.exit(1);
  }, 10000);
}

process.on('SIGTERM', () => gracefulShutdown('SIGTERM'));
process.on('SIGINT', () => gracefulShutdown('SIGINT'));