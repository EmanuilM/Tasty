const menuModel = require('../models/menuModel');
const orderModel = require('../models/orderModel');
const userModel = require('../models/userModel');
const dashboardModel = require('../models/dashboardModel');

async function getAllProducts(category, page) {
    if (category === 'undefined') {
        return Promise.all([
            menuModel.find({}),
            menuModel.find({}).skip((page - 1) * 12).limit(12)
        ]
        )
    } else {
        return Promise.all([
            menuModel.find({ category }),
            menuModel.find({ category }).skip((page - 1) * 12).limit(12)
        ])
    }
}

async function getProductByID(id) {
    return await menuModel.findById(id);
}


async function makeOrder(orderDetails, orderedProducts, userID) {
    if (!orderDetails.firstName || !orderDetails.lastName || !orderDetails.phoneNumber || !orderDetails.houseNumber || !orderDetails.street) {
        throw { message: "Invalid request!" };
    }

    if (typeof orderDetails.phoneNumber === "string") {
        throw { message: "Phone number filed must be a number" };
    }

    if (orderDetails.phoneNumber.toString().length < 10 || orderDetails.phoneNumber.toString().length > 10) {
        throw { message: "Phone number must be exactly 10 numbers!" };
    }


    orderedProducts.map(x => {
        if (x.quantity <= 0) {
            throw ({ message: "Invalid product quantity!" })
        }
    })


    const order = new orderModel({
        firstName: orderDetails.firstName,
        lastName: orderDetails.lastName,
        phoneNumber: orderDetails.phoneNumber,
        houseNumber: orderDetails.houseNumber,
        street: orderDetails.street,
        flatNumber: orderDetails.flatNumber,
        note: orderDetails.note,
        orderedProducts: orderedProducts,
        totalPrice: orderDetails.totalPrice,
        orderCreated: new Date().toString().split(' ').slice(1, 5).join(' '),
        shipping: orderDetails.shipping,
        discount: orderDetails.discount,
        status: "Pending",
    })


    order.save();

    await userModel.updateOne(
        { _id: userID },
        {
            firstName: orderDetails.firstName,
            lastName: orderDetails.lastName,
            phoneNumber: orderDetails.phoneNumber,
            houseNumber: orderDetails.houseNumber,
            street: orderDetails.street,
            $push: { orders: order }
        },

    );

    const dashboard = await dashboardModel.findOne({});
    await dashboardModel.updateOne({ _id: dashboard._id }, { $inc: { ordersReceived: 1 } });


    return order;

}

async function getAllOrders(page, category) {
    return Promise.all([
        await orderModel.find(category === "Pending" || category === "Delivered" || category === "Cancalled" ? { status: category } : {}).sort({ _id: -1 }),
        await orderModel.find(category === "Pending" || category === "Delivered" || category === "Cancalled" ? { status: category } : {}).skip((page - 1) * 10).limit(10).sort({ _id: -1 }),
    ])
}


async function getOrderByID(id) {
    return await orderModel.findById(id);
}

async function deleteOrderByID(id) {
    return await orderModel.deleteOne({ _id: id });
}

async function updateOrder(id, status) {
    await orderModel.updateOne({ _id: id }, { status: status[0] });
    const order = await orderModel.findById(id);
    if (order.status === "Delivered") {
        await dashboardModel.updateOne({ $inc: { earnings: order.totalPrice } });
    }
    return order;
}




module.exports = {
    getAllProducts,
    getProductByID,
    makeOrder,
    getAllOrders,
    getOrderByID,
    deleteOrderByID,
    updateOrder,
}