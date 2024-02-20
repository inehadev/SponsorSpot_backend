const mongoose = require("mongoose")

const eventSchema = mongoose.Schema({
   eventName:{
    type:String
   },
   Date:{
    type:String
   },
   Location:{
    type:String
   },
   
   targetaudience:{
    type:String
   },
   registrationstartDate:{
    type:String
   },
   registrationDeadline:{
    type:String
   },
   OrganizerContactNo:{
    type:String
   },
   description :{
    type:String
   },

    organizer:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Eventorganizer'
    }
});

const Event = mongoose.model('Event' , eventSchema);
module.exports = Event;