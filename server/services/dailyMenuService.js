const dailyMenuModel = require('../models/dailyMenuModel');

async function getDailyMenu() {
    // return await dailyMenuModel.find();
    const breakfastMenu = await dailyMenuModel.find({category : 'Breakfast'});
    const lunchMenu = await dailyMenuModel.find({category : 'Lunch'});
    const dinnerMenu = await dailyMenuModel.find({category : 'Dinner'});
    return [ 
        breakfastMenu,
        lunchMenu,
        dinnerMenu
    ]
}

async function createProduct(data) {
    if (!data.productName || !data.productPrice || !data.productDescription || !data.category) {
        throw ({ message: "All feilds are required!" });
    }
    const product = new dailyMenuModel({
        productName: data.productName,
        productPrice: data.productPrice,
        productDescription: data.productDescription,
        category: data.category,
    });

    product.save();
    return product;
}

async function deleteProduct(id) { 
    return await dailyMenuModel.deleteOne({id});
}

async function editProduct(id , data) { 
    if (!data.productName || !data.productPrice || !data.productDescription || !data.category) {
        throw ({ message: "All feilds are required!" });
    }
    return await dailyMenuModel.updateOne({_id : id} , data)
}

async function getProductByID(id) { 
    const product = await dailyMenuModel.findById(id);
    if(!product) { 
        throw({message : "There's not such product!"});
    }
    return product;
}

module.exports = {
    getDailyMenu,
    createProduct,
    deleteProduct,
    editProduct,
    getProductByID,
}