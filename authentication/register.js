const express = require("express");
const User = require('../models/user')
const UserRouter = express.Router();
const bcrypt = require ('bcrypt');
const jwt = require('jsonwebtoken');




 UserRouter.post("/register" , async(req,res)=>{
  try {
    const{username , email , password} = req.body;
    const existinguser = await User.findOne({email});
    if(existinguser){
        return res.status(400).json({message:"email is already register try with another email"});
    }
      
    const hashpassword = await bcrypt.hash(password , 10);

     let user  = new User ({
        username ,
        email,
        password:hashpassword
     })

     user = await user.save();
     res.json(user);
    
  } catch (error) {
    console.log(error);
  }

})

UserRouter.post('/login', async (req, res) => {
    try {
        const {email , password} = req.body;
        if (!email || !password) {
            return res.status(400).json({ message: "Email and password are required." });
        }

        const existUser = await User.findOne({email});
        if(!existUser){
            console.log("Invalid email");
            res.status(400).json({error:"Invalid Username"});
        }
        else{
            const isMatch = await bcrypt.compare(password , existUser.password);
            if(!isMatch){
                console.log("Wrong Password");
                res.status(400).json({error:"Invalid Password Try with another one"});
            }
            else{
                const token =  jwt.sign({id:existUser._id} , "Securekey");
                res.json({...existUser._doc , token})

            }
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({error:error.message});
    }

   
})




module.exports= UserRouter;
