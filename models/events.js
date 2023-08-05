'use strict';

const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  host: { type: String, required: true },
  day: { type: Date, required: true },
  startTime: { type: String, required: true },
  endTime: { type: String, required: true },
  description: { type: String },
  participants: [
    {
      username: { type: String, unique: true, required: true },
      comments: { type: String },
    },
  ],
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;