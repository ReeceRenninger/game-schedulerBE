'use strict';

require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const Scheduler = require('./models/schedule');

//create app singleton
const app = express();
const port = process.env.PORT;

// Middleware
app.use(bodyParser.json());
app.use(cors());

//routes

//start
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});