const dashboardModel = require('../models/dashboardModel');
const orderModel = require('../models/orderModel');


async function getDashboardData() {
    return await dashboardModel.findOne({}) || createDashboard();
}


async function createDashboard() {
    const dashboard = new dashboardModel({
        ordersDelivered: 0,
        ordersReceived: 0,
        earnings: 0,
    })

    dashboard.save();
    return dashboard;
}


async function getDeliveredOrders() {
    const orderedProducts = await orderModel.find({ status: "Delivered" });
    return await dashboardModel.updateOne({ ordersDelivered : orderedProducts.length });
}

async function increaseEarnings(money) { 
    return await dashboardModel.updateOne({ $inc : { earnings : money }});
}




module.exports = {
    getDashboardData,
    createDashboard,
    getDeliveredOrders,
    increaseEarnings,
}