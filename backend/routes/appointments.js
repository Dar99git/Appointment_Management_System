const router = require("express").Router();
const Appointment = require("../models/appointment");

router.route("/add").post((req,res)=>{

    const appointmentNo = req.body.appointmentNo;
    const maker = req.body.maker;
    const seeker = req.body.seeker;
    const subject = req.body.subject;
    const date = req.body.date;
    const time = req.body.time;

    let newAppointment = new Appointment();
    newAppointment.appointmentNo = appointmentNo;
    newAppointment.maker = maker;
    newAppointment.seeker = seeker;
    newAppointment.subject = subject;
    newAppointment.date = date;
    newAppointment.time = time;
    
    newAppointment.save().then(()=>{
        res.json("Appointment created")
    }).catch((err)=>{
        console.log(err);
    })

})

module.exports = router;