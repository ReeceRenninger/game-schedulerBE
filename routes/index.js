const express = require('express');
const router = express.Router();
const Schedule = require('../models/schedule');

//get all schedules
router.get('/schedules', async (req, res, next) => {
  try{
    //finds all schedules
    const schedules = await Schedule.find({});
    //returns all schedules
    res.json(schedules);
  } catch (error){
    res.status(500).json({error: 'failed to get schedules'});
  }
});

//post a schedule
router.post('/schedule', async (req, res, next) => {
  try{
    //grabs information from request body
    const { username, contact, timeSlot } = req.body;
    //creates a new schedule with the request body using schema
    const schedule = new Schedule({ username, contact, timeSlot });
    //saves the schedule to the database
    await schedule.save();
  } catch (error){
    res.status(500).json({error: 'failed to update schedule'});
  }
});

module.exports = router;