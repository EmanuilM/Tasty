const menuModel = require('../models/menuModel');
const orderModel = require('../models/orderModel');

async function getAllProducts(category, page) {
    if (category === 'undefined') {
        return Promise.all([
            menuModel.find({}),
            menuModel.find({}).skip((page - 1) * 12).limit(12)
        ]
        )
    } else {
        return Promise.all([
            menuModel.find({}),
            menuModel.find({ category }).skip((page - 1) * 12).limit(12)
        ])
    }
}

async function getProductByID(id) {
    return await menuModel.findById(id);
}


async function makeOrder(orderDetails , orderedProducts) {
    if (!orderDetails.firstName || !orderDetails.lastName || !orderDetails.phoneNumber || !orderDetails.houseNumber || !orderDetails.street) {
        throw { message: "Invalid request!" };
    }

    if(typeof orderDetails.phoneNumber === "string") { 
        throw {message : "Phone number filed must be a number"};
    }

    if(orderDetails.phoneNumber.toString().length < 10 || orderDetails.phoneNumber.toString().length > 10) { 
        throw {message : "Phone number must be exactly 10 numbers!"};
    }

    let totalPrice;
    let shipping = 7;

    orderedProducts.map(x => { 
        totalPrice = x.quantity * x.productPrice;
    })
    
    if(totalPrice >= 10 ) { 
        shipping = 0;
    }

    
    const order = new orderModel({
        firstName: orderDetails.firstName,
        lastName: orderDetails.lastName,
        phoneNumber: orderDetails.phoneNumber,
        houseNumber : orderDetails.houseNumber,
        street : orderDetails.street,
        flatNumber : orderDetails.flatNumber,
        note : orderDetails.note,
        orderedProducts : orderedProducts,
        totalPrice : totalPrice,
        orderCreated : new Date().toString().split(' ').slice(1,5).join(' '),
        shipping : shipping,
        status : orderDetails.status,
    })


    order.save();

    return order;

    

   
}



module.exports = {
    getAllProducts,
    getProductByID,
    makeOrder,

}