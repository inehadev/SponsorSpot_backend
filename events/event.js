const express = require("express");
const verifyUser = require("../middlewares/verify");
const Event = require('../models/eventmodel');
const eventRouter = express.Router();
const jwt = require('jsonwebtoken')

eventRouter.post('/createEvent',  async (req , res)=>{
    try {
        //  const organizer = await Event.findById(organizer);
        const {
            eventName ,
             Date , 
             Location ,
             targetaudience , 
             registrationstartDate , 
             registrationDeadline , 
             OrganizerContactNo,
              description 
            } = req.body;

         const existingevent = await Event.findOne({eventName , Date , Location , description});

         if(existingevent){
            console.log("Event already registered");
            return res.status(400).json({ error: "Event already registered" });
         }else{
          
            let event = new Event({
                eventName,
                Date,
                Location,
                targetaudience,
                registrationstartDate,
                registrationDeadline,
                OrganizerContactNo,
                description
            })

            const savedEvent = await event.save();
            res.json(savedEvent);
            console.log(savedEvent);
            const token  = jwt.sign({id:existingevent._id }, "SecureKey");
            res.json({...existingevent._doc , token});

         } 

    } catch (error) {
        console.log(error);
    }
})
module.exports = eventRouter;