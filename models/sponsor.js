const mongoose = require("mongoose")

const spornsorSchema = mongoose.Schema({
  username:{
    type:String
  },
  email:{
    type:String
  },
  password:{
    type:String
  },
  ContactNumber :{
    type:String
  },
  CompanyName:{
    type:String
  },
  CompanyLogo:{
    type:String
  },
  Complocation:{
    type:String
  },

});


const Sponsor = mongoose.model('Sponsor' , spornsorSchema);
module.exports = Sponsor;
