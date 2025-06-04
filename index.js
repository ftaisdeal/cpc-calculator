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

const Home = require('./pages/Home');
const Origins = require('./pages/Origins');
const Rundown = require('./pages/Rundown');
const Tickets = require('./pages/Tickets');
const Shows = require('./pages/Shows');
const Contact = require('./pages/Contact');
const Casting = require('./pages/Casting');
const Update = require('./pages/Update');
const Media = require('./pages/Media');
const Miranda = require('./pages/Miranda');
const EmailAdd = require('./pages/EmailAdd');
const QR = require('./pages/QR');
const Email = require('./pages/Email');
const Admin = require('./admin/Admin');
const EmailPreview = require('./admin/email/EmailPreview');
const SendUpdate = require('./admin/email/EmailUpdate');
const EmailTracking = require('./admin/email/EmailTracking');
const Unsubscribe = require('./pages/Unsubscribe');
const Error404 = require('./pages/404');

// Home
app.get('/', (req, res) => {
  Home(res);
});

// Rundown
app.get('/rundown', (req, res) => {
  Rundown(res);
});

// Tickets
app.get('/tickets', (req, res) => {
  Tickets(res);
});

// Shows
app.get('/shows', (req, res) => {
  Shows(res);
});

// Origins
app.get('/origins', (req, res) => {
  Origins(res);
});

// Contact
app.get('/contact', (req, res) => {
  Contact(res);
});

// Casting
app.get('/casting', (req, res) => {
  Casting(res);
});

// Update
app.get('/update', (req, res) => {
  Update(res);
});

// Media
app.get('/media', (req, res) => {
  Media(res);
});

// Miranda
app.get('/miranda', (req, res) => {
  Miranda(res);
});

// Store
app.get('/store', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages/store_redirect.html'));
});

// Store
app.get('/skitsandscripts', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages/skitsandscripts.html'));
});

// Email add for performances
app.get('/add', (req, res) => {
  EmailAdd(res);
});

// QR codes
app.get('/qr', (req, res) => {
  QR(req, res);
});

// Email insert for updates by email
app.post('/email', (req, res) => {
  Email(req, res);
});

// Admin
app.get('/admin', 
  basicAuth({
      users: { 'admin': 'firinn' }, // Credentials
      challenge: true, // Prompt the user for credentials
      unauthorizedResponse: 'Unauthorized' // Response for unauthorized users
  }),
  (req, res) => {
    Admin(res);
  }
);

app.get('/email_preview', (req, res) => {
  EmailPreview(req, res);
});

// Send email update
app.post('/email_update', (req, res) => {
  SendUpdate(req, res);
});

// Unsubscribe
app.get('/unsubscribe', (req, res) => {
  Unsubscribe(req, res);
});

// Email tracking
app.get('/email_tracking', (req, res) => {
  EmailTracking(req, res);
});

// 404 handler
app.use((req, res) => {
  Error404(res);
});

// Start the server
app.listen(port, (err) => {
  if (err) {
    console.error('Failed to start server:', err);
  } else {
    console.log(`Server listening on port ${port}`);
  }
});