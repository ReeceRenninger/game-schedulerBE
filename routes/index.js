const express = require('express');
const router = express.Router();
const Event = require('../models/events');

//get all events
router.get('/events', async (req, res, next) => {
  try{
    //finds all events
    const events = await Event.find({});
    //returns all events
    // console.log('GET REQUEST REACHED LINE 12');
    res.json(events);
    console.log('all events were retrieved');
  } catch (error){
    res.status(500).json({error: 'failed to get events'});
  }
});

//host creating an event
router.post('/create-event', async (req, res, next) => {
  try {
    const newEvent = new Event({
      title: req.body.title,
      host: req.body.host,
      day: req.body.day,
      startTime: req.body.startTime,
      endTime: req.body.endTime,
      description: req.body.description,
      participants: [], //empty array to start since users will join in later through another endpoint
    });
    console.log(newEvent);  
    await newEvent.save();
    res.status(201).json({ message: 'Event created successfully' });
  } catch (error) {
    console.error('Error creating event: ', error);
    res.status(500).json({ error: 'Failed to create event' });
  }
});

//user joining an event
router.put('/join-event/:eventId', async (req, res, next) => {
  try{
    const eventId = req.params.eventId;
    console.log(eventId);
    const { username, comments } = req.body;

    const event = await Event.findById(eventId);
    if(!event){
      res.status(404).json({error: 'event not found'});
    }

    event.participants.push({username, comments});
    await event.save();

    res.status(202).json({message: 'event joined successfully'});
  } catch (error){
    console.error('Error joining event: ', error);
    res.status(500).json({error: 'failed to update event'});
  }
});

//delete a event
router.delete('/delete-event/:eventId', async (req, res, next) => {
  try{
    //finds event by id and deletes it
    let id = req.params.id;
    await Event.findByIdAndDelete(id);
    res.status(200).json({ message: `event id:${id} was deleted successfully` });
  } catch (error){
    res.status(500).json({error: 'failed to delete event'});
  }
});

module.exports = router;