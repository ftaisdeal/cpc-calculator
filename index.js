const express = require('express');
const app = express();
const basicAuth = require('express-basic-auth');
app.use(express.static('public'));
app.set('trust proxy', true);
const port = 3000;

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

const Home = require('./pages/Home');
const Origins = require('./pages/Origins');
const Rundown = require('./pages/Rundown');
const Tickets = require('./pages/Tickets');
const Shows = require('./pages/Shows');
const Contact = require('./pages/Contact');
const Update = require('./pages/Update');
const Media = require('./pages/Media');
const Miranda = require('./pages/Miranda');
const QR = require('./pages/QR');
const Email = require('./pages/Email');
const Admin = require('./admin/Admin');
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

// 404 handler
app.use(function (req, res, next) {
  Error404(res);
});

// start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});