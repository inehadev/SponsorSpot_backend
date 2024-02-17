const mongoose=require("mongoose");
const UserSchema = mongoose.Schema({
  username:{
    type: String
   },
   email:{
    type:String
   },
   password:{
    type:String
   },
   CompanyName:{
    type:String
   },
   CompanyLogo:{
    type:String
   },
   EevntName:{
    type:String
   },
   EventDetail:{
    type:String
   },

});
 
   
 
const User = mongoose.model("User", UserSchema);
 module.exports= User;