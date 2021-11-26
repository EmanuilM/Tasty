const mongoose = require('mongoose');

const discountModel = new mongoose.Schema({
    promoCode : { type : String , required : true},
    percent : {type : Number , required : true},
})

module.exports = mongoose.model('discount' , discountModel) ;