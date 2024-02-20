const jwt = require("jsonwebtoken");
const express = require("express");

const verifyUser = (req , res , next) =>{
    try {
        const token = req.header('x-auth-token');
        if(!token)
        {
            return res.status(500).json({message:"no token found"});
        }
       const isverified = jwt.verify(token , 'Securekey');
       if(isverified){
        req.token = token;
        req.user = isverified.id;
       }
       next(); 
    } catch (error) {
        console.log(error);
    }
}

module.exports = verifyUser;
