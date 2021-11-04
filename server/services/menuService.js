const menuModel = require('../models/menuModel');
const cloudinaryService = require('./cloudinaryService');

async function getProductsByMenuCategory(category) {
    return await menuModel.find({ category: category });
}

async function createProduct(data, imagesData) {
    if (typeof data.productPrice === "string") {
        throw ({ message: "Product price must be a number" });
    }
    if (!data.productName || !data.productPrice || !data.productDescription || !data.category) {
        throw ({ message: "All feilds are required!" });
    }

    const product = new menuModel({
        productName: data.productName,
        productPrice: data.productPrice,
        productDescription: data.productDescription,
        category: data.category,
        images: imagesData
    });

    product.save();
    return product;
}

async function deleteProduct(id) {
    const product = await menuModel.findById(id);
    product.images.map(async (x) => { 
        await cloudinaryService.deleteImageFromCloudinary(x.imageID)
    })
   return await menuModel.deleteOne({ _id: id });
    
}

async function getProductByID(id) { 
    const product = await menuModel.findById(id);
    if(!product) { 
        throw({message : "There's not such product!"});
    }
    return product;
}

async function editProduct(id , data) { 
    if(typeof data.productPrice === "string") { 
        throw({message : "Product price must be a number"});
    }
    if (!data.productName || !data.productPrice || !data.productDescription || !data.category) {
        throw ({ message: "All feilds are required!" });
    }
    return await menuModel.updateOne({_id : id} , data)
}


module.exports = {
    getProductsByMenuCategory,
    createProduct,
    deleteProduct,
    getProductByID,
    editProduct,
}