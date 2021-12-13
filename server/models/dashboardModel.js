const mongoose = require('mongoose');

const dashboardSchema = new mongoose.Schema({ 
    ordersDelivered : {type : Number },
    ordersReceived : {type : Number },
    earnings : {type : Number},

})

module.exports = mongoose.model('dashboard' , dashboardSchema);