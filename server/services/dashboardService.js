const dashboardModel = require('../models/dashboardModel');


async function getDashboardData() { 
    return await dashboardModel.findOne({});
}


async function createDashboard() { 
    const dashboard = new dashboardModel({ 
        ordersDelivered : 0,
        ordersReceived : 0,
        earnings : 0,
    })

    dashboard.save();
    return dashboard;
}


module.exports = { 
    getDashboardData,
    createDashboard,
}