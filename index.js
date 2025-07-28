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

// Basic auth configuration
const basicAuthConfig = {
  users: { [process.env.ADMIN_USER || 'admin']: process.env.ADMIN_PASSWORD || 'password' },
  challenge: true,
  unauthorizedResponse: 'Unauthorized'
};

// Request logging middleware
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
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
  async (req, res) => {
    try {
      const mysql = require('mysql2/promise');
      const db_config = require('./admin/db_config');
      const getLocationInfo = require('./tracking/geo-location');
      
      const pool = mysql.createPool(db_config);
      
      // Get unique IP addresses from the database for the specified source and time period
      const source = req.body.source;
      const days = parseInt(req.body.days, 10) || 30;
      const [rows] = await pool.query(`
        SELECT DISTINCT ip_address, COUNT(*) as hits
        FROM referrers 
        WHERE source = ? AND date_time >= NOW() - INTERVAL ? DAY
        GROUP BY ip_address 
        ORDER BY hits DESC
      `, [source, days]);
      
      const locationData = [];
      
      // Process each IP address
      for (const row of rows) {
        try {
          const [city, region, country, coordinates] = await getLocationInfo(row.ip_address);
          locationData.push({
            ip: row.ip_address,
            hits: row.hits,
            city: city || 'Unknown',
            region: region || 'Unknown',
            country: country || 'Unknown',
            coordinates: coordinates || 'Unknown'
          });
        } catch (error) {
          console.error(`Error getting location for IP ${row.ip_address}:`, error);
          locationData.push({
            ip: row.ip_address,
            hits: row.hits,
            city: 'Error',
            region: 'Error',
            country: 'Error',
            coordinates: 'Error'
          });
        }
      }
      
      res.json(locationData);
    } catch (error) {
      console.error('Error in IP location lookup:', error);
      res.status(500).json({ error: 'Failed to lookup IP locations' });
    }
  }
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