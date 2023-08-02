'use strict';

const mongoose = require('mongoose');

const scheduleSchema = new mongoose.Schema({
  username: { type: String, required: true },
  comments: { type: String },
});

const Schedule = mongoose.model('Schedule', scheduleSchema);

module.exports = Schedule;