const mongoose = require("mongoose")

const eventOrganizerSchema = mongoose.Schema({
    username:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
    PhoneNo:{
        type:String
    },
    OrganizationName:{
        type:String
    }




});

const Eventorganizer = mongoose.model('Eventorganizer' , eventOrganizerSchema);
module.exports = Eventorganizer;