const discountModel = require('../models/discountModel');

async function getAllDiscounts(page) {

    return Promise.all([
        await discountModel.find(),
        await discountModel.find().skip((page - 1) * 10).limit(10)
    ])
}

async function getPromoCodeByID(id) {
    return await discountModel.findById(id);
}

async function createPromoCode(data) {

    const isPromoCodeExist = await discountModel.findOne({ promocode: data });
    if (isPromoCodeExist) {
        throw ({ message: "This promo code already exist!" });
    }

    if (!data.promoCode) {
        throw ({ message: "Promo code is required!" });
    }

    if (!data.percent) {
        throw ({ message: "Something went wrong!" });

    }

    const discount = new discountModel({
        promoCode: data.promoCode,
        percent: data.percent,
    })

    discount.save();
    return discount;
}

async function checkPromoCode(code) {
    if (code === 'undefined') {
        return ({ message: "Invalid promo code!" });
    }
    return await discountModel.findOne({ promoCode: code });
}

async function deletePromoCode(id) {
    await discountModel.deleteOne({ _id: id });
    return await discountModel.find();
}

async function updatePromoCode(id, data) {
    await discountModel.updateOne({ _id: id }, { promoCode: data.promoCode, percent: data.percent });
    return await discountModel.find();
}

module.exports = {
    getAllDiscounts,
    getPromoCodeByID,
    createPromoCode,
    checkPromoCode,
    deletePromoCode,
    updatePromoCode,
}