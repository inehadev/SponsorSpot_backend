const express = require ('express');
const Eventorganizer = require('../models/eventOrganizermodel');
const bcrypt = require('bcrypt');

const EventOrganizerRouter  = express.Router();

EventOrganizerRouter.post('/eventOrganizerRegister' ,  async (req,res)=>{
    try{
    const {username, email , password , PhoneNo , OrganizationName} = req.body;
    const existingUser = await Eventorganizer.findOne({username, email , password , PhoneNo , OrganizationName});
   
    if(existingUser){
        return res.status(500).json(`User already registered try with different email`);
    }
    const securepassword = await  bcrypt.hash(password ,10);
    
        let eventOrganizer  = new Eventorganizer({
            username,
            email,
            password:securepassword,
            PhoneNo,
            OrganizationName
        })

        eventOrganizer = await eventOrganizer.save();
        res.json(eventOrganizer);
    
}catch(error){
    console.log(error);
}

})

module.exports= EventOrganizerRouter;

