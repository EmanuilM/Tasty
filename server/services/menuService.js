const menuModel = require("../models/menuModel");
const cloudinaryService = require("./cloudinaryService");
const { uploadImageToCloudinary } = require("../services/cloudinaryService");

async function getProductsByMenuCategory(category) {
  return await menuModel.find({ category: category });
}

async function getNext(category , page) { 
  return Promise.all([
    getProductsByMenuCategory(category),
    menuModel.find({category : category }).skip((page  - 1) * 9 ).limit(9)
  ])
 
}


async function createProduct(data, files) {
  const imageCollection = [];
  if (typeof data.productPrice === "string") {
    throw { message: "Product price must be a number" };
  }
  if (!data.productName || !data.productPrice || !data.productDescription || !data.category) {
    throw { message: "All feilds are required!" };
  }

  if (!files.image) {
    throw ({ message: 'Image/s is required!' });
  }
  if (Array.from(files.image).length > 0) {
    files.image.map((x) => {
      if (!/image\/(jpg|jpeg|png)$/.test(x.mimetype)) {
        throw { message: "Unsupported file extension! We support jpg/jpeg/png file extensions!" };
      }
      if (x.size > 10485760) {
        throw { message: "File cannot be over 10 MB" };
      }
    });
  }else { 
    if (!/image\/(jpg|jpeg|png)$/.test(files.image.mimetype)) {
      throw { message: "Unsupported file extension! We support jpg/jpeg/png file extensions!" };
    }
    if (files.image.size > 10485760) {
      throw { message: "File cannot be over 10 MB" };
    }
  }




  if (Array.from(files.image).length > 0) {
    await Promise.all(
      files.image.map(async (x) => {
        const [image, imageID] = await uploadImageToCloudinary(x.filepath);
        imageCollection.push({imageURL :image, imageID : imageID});
      })
    )
  } else {
    const [image, imageID] = await uploadImageToCloudinary(files.image.filepath);
    imageCollection.push({imageURL :image, imageID : imageID});

  }
  const product = new menuModel({
    productName: data.productName,
    productPrice: data.productPrice,
    productDescription: data.productDescription,
    category: data.category,
    images: imageCollection,
  });
  product.save();

  return [product , imageCollection];

}

async function deleteProduct(id) {
  const product = await menuModel.findById(id);
  product.images.map(async (x) => {
    await cloudinaryService.deleteImageFromCloudinary(x.imageID.split("/")[1]);
  });
  return await menuModel.deleteOne({ _id: id });
}

async function getProductByID(id) {
  const product = await menuModel.findById(id);
  if (!product) {
    throw { message: "There's not such product!" };
  }
  return product;
}

async function editProduct(id, data) {
  if (typeof data.productPrice === "string") {
    throw { message: "Product price must be a number" };
  }
  if (
    !data.productName ||
    !data.productPrice ||
    !data.productDescription ||
    !data.category
  ) {
    throw { message: "All feilds are required!" };
  }
  return await menuModel.updateOne({ _id: id }, data);
}

async function updateProduct(id, deleteImageID) {
  const product = await menuModel.findById(id);
  product.images.map(async (x) => {
    if (x.imageID === deleteImageID) {
      return await menuModel.updateOne({ id: id }, { $pull: { images: x } });
    }
  });

  return await menuModel.findById(id);
}


module.exports = {
  getProductsByMenuCategory,
  createProduct,
  deleteProduct,
  getProductByID,
  editProduct,
  updateProduct,
  getNext,
};
