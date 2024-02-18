const express = require ('express');
const User = require('../models/user');
const bcrypt = require ('bcrypt')
const SponserRouter = express.Router();

SponserRouter.post('/sponsorRegister' , async (req , res) =>{
    
    try{
    const {username , email , password , CompanyName , CompanyLogo} = req.body;
    const existingUser = await User.findOne({username , email , CompanyName });
    if(existingUser){
        return res.status(400).json(`User already register try with another email`);
    }

    const securepassword = await bcrypt.hash(password , 10);

    let user = new User({
        username,
        email,
        password:securepassword,
        CompanyName,
        CompanyLogo

    })
    user = await user.save();
    res.json(user);
}catch(err){
    console.log(err);
   
}
    

})

module.exports = SponserRouter;