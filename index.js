const express = require('express');
const app = express();
app.use(express.static('public'));
const port = 3000;

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

const Home = require('./pages/Home');
const Origins = require('./pages/Origins');
const Actors = require('./pages/Actors');
const Rundown = require('./pages/Rundown');
const Tickets = require('./pages/Tickets');
const Shows = require('./pages/Shows');
const Contact = require('./pages/Contact');
const Update = require('./pages/Update');
const Email = require('./pages/Email');
const Error404 = require('./pages/404');

// home
app.get('/', (req, res) => {
  Home(res);
});

// rundown
app.get('/rundown', (req, res) => {
  Rundown(res);
});

// actors
app.get('/actors', (req, res) => {
  Actors(res);
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

// update
app.get('/update', (req, res) => {
  Update(res);
});

// email insert for updates
app.post('/email', (req, res) => {
  Email(req, res);
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