const mongoose = require('mongoose');

const reservationModel = new mongoose.Schema({
    firstName : { type: String , required : true },
    lastName : { type: String , required : true },
    people : { type: Number , required : true },
    date : { type: String , required : true },
    time : { type: String , required : true },
    phoneNumber : { type: Number , required : true },
})

module.exports = mongoose.model('reservation' , reservationModel);