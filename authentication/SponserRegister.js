const express = require ('express');
const Sponsor = require('../models/sponsor');
const bcrypt = require ('bcrypt')

const SponserRouter = express.Router();

SponserRouter.post('/sponsorRegister' , async (req , res) =>{
    
    try{
    const {username , email , password , ContactNumber, CompanyName , CompanyLogo , Complocation} = req.body;
    const existingUser = await Sponsor.findOne({username , email  , password, ContactNumber ,  CompanyName , CompanyLogo , Complocation });
    if(existingUser){
        return res.status(400).json(`User already register try with another email`);
    }

    const securepassword = await bcrypt.hash(password , 10);

    let sponsor = new Sponsor({
        username,
        email,
        password:securepassword,
        ContactNumber,
        CompanyName,
        CompanyLogo,
        Complocation,

    })
     const savedSponsor = await sponsor.save();
    res.json(savedSponsor);
}catch(err){
    console.log(err);
   
}
    

})

module.exports = SponserRouter;