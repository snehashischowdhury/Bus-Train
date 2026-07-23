const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({

    userEmail:{
        type:String,
        required:true
    },

    passengerName:{
        type:String,
        required:true
    },

    age:{
        type:Number,
        required:true
    },

    gender:{
        type:String,
        required:true
    },

    phone:{
        type:String,
        required:true
    },

    vehicle:{
        type:String,
        required:true
    },

    source:{
        type:String,
        required:true
    },

    destination:{
        type:String,
        required:true
    },

    journeyDate:{
        type:String,
        required:true
    },

    coach:{
        type:String,
        required:true
    },

    seat:{
        type:String,
        required:true
    },

    fare:{
        type:Number,
        required:true
    },

    paymentMethod:{
        type:String,
        required:true
    },

    bookingId:{
        type:String,
        unique:true,
        required:true
    },

    bookingTime:{
        type:Date,
        default:Date.now
    }

});

module.exports = mongoose.model("Booking",bookingSchema);