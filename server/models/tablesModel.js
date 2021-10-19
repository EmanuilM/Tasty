const mongoose = require('mongoose');

const tableModel = new mongoose.Schema({
    name : {type : String , required : true},
    capacity : {type : Number , required : true},
    status : {type : String , required : true},
    products : [],
})

module.exports = mongoose.model('table' , tableModel);