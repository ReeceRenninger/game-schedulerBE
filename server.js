'use strict';

require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const router = require('./routes/index');
const db = require('./db/index'); //must be required in to app level to run

//create app singleton
const app = express();
const port = process.env.PORT || 3002;

// Middleware
app.use(bodyParser.json());
app.use(cors());

//routes
app.use('/api', router);

// app.use('/', (req, res, next) => {
//   console.log('I AM HOME');
// });
//start
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});