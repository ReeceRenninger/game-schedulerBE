const express = require('express');
const router = express.Router();
const Schedule = require('../models/schedule');


//get all schedules
router.get('/schedule', async (req, res, next) => {
  try{
    //finds all schedules
    const schedules = await Schedule.find({});
    //returns all schedules
    res.json(schedules);
    console.log('all schedules were retrieved');
  } catch (error){
    res.status(500).json({error: 'failed to get schedules'});
  }
});

//post a schedule
router.post('/addslot', async (req, res, next) => {
  try{
    //grabs information from request body
    const { username, contact, timeSlot } = req.body;
    //creates a new schedule with the request body using schema
    const schedule = new Schedule({ username, contact, timeSlot }); //added await to remedy thunderclient hang, did not work
    //saves the schedule to the database
    await schedule.save(); // moved await to new creation of schedule
    res.status(201).json({ message: 'schedule timeslot added successfully' });
  } catch (error){
    res.status(500).json({error: 'failed to update schedule'});
  }
});

//delete a schedule
router.delete('/deleteslot/:id', async (req, res, next) => {
  try{
    //finds schedule by id and deletes it
    let id = req.params.id;
    await Schedule.findByIdAndDelete(id);
    res.status(200).json({ message: `timeslot id:${id} was deleted successfully` });
  } catch (error){
    res.status(500).json({error: 'failed to delete schedule'});
  }
});

module.exports = router;