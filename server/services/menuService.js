const menuModel = require('../models/menuModel');

async function getProductsByMenuCategory(category) { 
    return await menuModel.find({category : category});
}

async function createProduct(data) { 
    if(typeof data.productPrice === "string") { 
        throw({message : "Product price must be a number"});
    } 
    if (!data.productName || !data.productPrice || !data.productDescription || !data.category) {
        throw ({ message: "All feilds are required!" });
    }
    const product = new menuModel({
        productName: data.productName,
        productPrice: data.productPrice,
        productDescription: data.productDescription,
        category: data.category,
    });

    product.save();
    return product;
}

module.exports = { 
    getProductsByMenuCategory,
    createProduct
}