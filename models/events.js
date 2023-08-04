'use strict';

const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  host: { type: String, required: true },
  startTime: { type: Date, required: true },
  endTime: { type: Date, required: true },
  description: { type: String },
  participants: [
    {
      username: { type: String, required: true },
      comments: { type: String },

    },

  ],
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;