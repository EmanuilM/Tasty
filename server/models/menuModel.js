const mongoose = require('mongoose');

const menuModel = new mongoose.Schema({
    productName : {type:String , required : true},
    productPrice : {type:Number , required : true},
    productDescription : {type : String , required : true},
    category : {type : String , required : true}
    
})

module.exports = mongoose.model('menu' , menuModel);
