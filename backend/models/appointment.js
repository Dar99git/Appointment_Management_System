const { date, string } = require('joi');
const mongoose =  require('mongoose');

const Schema = mongoose.Schema;

const appointmentSchema = new Schema({

    appointmentNo: {
        type : String,
        required : true
    },

    maker: {
        type : String,
        required : true
    },
    seeker: {
        type : String,
        required : true
    },
    subject: {
        type : String,
        required : true
    },
    date: {
        type : String,
        required : true
    },
    time: {
        type : String,
        required : true
    }
})

const Appointment = mongoose.model("appointment",appointmentSchema);

module.exports = Appointment;