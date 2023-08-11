'use strict';

require('dotenv').config();
const mongoose = require('mongoose');
const connectionURL = process.env.MONGO_URL;

mongoose.connect(connectionURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('connected', () => {
  console.log('MongoDB connected');
});
db.on('error', console.error.bind(console, 'connection error:'));


module.exports = db;