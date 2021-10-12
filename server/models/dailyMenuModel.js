const mongoose = require('mongoose');

const dailyMenuSchema = new mongoose.Schema({

    productName : {type:String , required : true},
    productPrice : {type:Number , required : true},
    productDescription : {type : String , required : true},
    category : {type : String , required : true}

})

module.exports = mongoose.model('dailyMenu' , dailyMenuSchema);