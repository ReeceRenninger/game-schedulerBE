'use strict';

const mongoose = require('mongoose');

const scheduleSchema = new mongoose.Schema({
  username: { type: String, required: true },
  contact: { type: String, required: true },
  timeSlot: { type: String, required: true },
});

const Schedule = mongoose.model('Schedule', scheduleSchema);

module.exports = Schedule;