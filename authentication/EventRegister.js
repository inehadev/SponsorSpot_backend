const express = require ('express');
const User = require('../models/user');
const bcrypt = require('bcrypt');

const EventRouter  = express.Router();

EventRouter.post('/eventRegister' ,  async (req,res)=>{
    try{
    const {username , email , password , EventName , EventDetail} = req.body;
    const existingUser = await User.findOne({username, email , EventName});
   
    if(existingUser){
        return res.status(500).json(`User already registered try with different email`);
    }
    const securepassword = await  bcrypt.hash(password ,10);
    
        let user = new User({
            username,
            email,
            password:securepassword,
            EventName,
            EventDetail
        })

        user = await user.save();
        res.json(user);
    
}catch(error){
    console.log(error);
}

})

module.exports= EventRouter;

