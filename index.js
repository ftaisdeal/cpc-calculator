const express = require('express');
const app = express();
app.use(express.static('public'));
const port = 3000;

const Home = require('./pages/Home');
const About = require('./pages/About');
const Shows = require('./pages/Shows');
const Contact = require('./pages/Contact');
const Cast = require('./pages/Cast');
const QR = require('./pages/QR');
const Error404 = require('./pages/404');

// Home
app.get('/', (req, res) => {
  Home(res);
});

// about
app.get('/about', (req, res) => {
  About(res);
});

// shows
app.get('/shows', (req, res) => {
  Shows(res);
});

// contact
app.get('/contact', (req, res) => {
  Contact(res);
});

// cast resources
app.get('/castresources', (req, res) => {
  Cast(res);
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