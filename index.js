const express = require('express');
const app = express();
app.use(express.static('public'));
const port = 3000;

const Home = require('./pages/Home');
const Origins = require('./pages/Origins');
const Rundown = require('./pages/Rundown');
const Tickets = require('./pages/Tickets');
const Shows = require('./pages/Shows');
const Contact = require('./pages/Contact');
const Update = require('./pages/Update');
const QR = require('./pages/QR');
const Error404 = require('./pages/404');

// Home
app.get('/', (req, res) => {
  Home(res);
});

// rundown
app.get('/rundown', (req, res) => {
  Rundown(res);
});

// tickets
app.get('/tickets', (req, res) => {
  Tickets(res);
});

// shows
app.get('/shows', (req, res) => {
  Shows(res);
});

// origins
app.get('/origins', (req, res) => {
  Origins(res);
});

// contact
app.get('/contact', (req, res) => {
  Contact(res);
});

// cast resources
app.get('/update', (req, res) => {
  Update(res);
});

// QR
app.get('/qr', (req, res) => {
  QR(res);
});

// 404 handler
app.use(function (req, res, next) {
  Error404(res);
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});