const menuModel = require('../models/menuModel');

async function getProductsByMenuCategory(category) { 
    return await menuModel.find({category : category});
}

async function createProduct(data ,imagesData) { 
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
        images : imagesData
    });

    product.save();
    return product;
}

module.exports = { 
    getProductsByMenuCategory,
    createProduct
}