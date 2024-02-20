const express = require('express');
const Sponsor = require('../models/sponsor');
const SponsorLoginRouter = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

SponsorLoginRouter.post('/SponsorLogin' , async( req,res)=>{
    try {
        const {username , email , password} = req.body;
    const existingUser = await  Sponsor.findOne({username , email });
    if(!existingUser){
        console.log("Invalid Email");
        res.status(400).json(`Invalid Email`);
    }else{
        const isMatch = await bcrypt.compare(password , existingUser.password);
        if(!isMatch){
            console.log("Wrong password");
            res.json(`Wrong password`);
        }else{
            const token  = jwt.sign({id:existingUser._id }, "SecureKey");
            res.json({...existingUser._doc , token});
        }
    }
        
    } catch (error) {
        console.log(error);
    }
})


module.exports = SponsorLoginRouter;