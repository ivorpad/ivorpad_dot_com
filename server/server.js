require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const config = require('./config/config');
const mongoose = require('mongoose');
const port = process.env.PORT || 8080;

// Configuration
// ================================================================================================


// Set up Mongoose
mongoose.connect( config.db );
mongoose.Promise = global.Promise;

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// API routes
require('./routes')(app);

app.listen(port, 'localhost', (err) => {
  if (err) {
    console.log(err);
  }

  console.info('>>> 🌎 Open http://localhost:%s/ in your browser.', port);
});

module.exports = app;