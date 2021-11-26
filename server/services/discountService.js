const discountModel = require('../models/discountModel');

async function getAllDiscounts() { 
       return await discountModel.find();
}

async function createPromoCode(data) { 

    if(!data.promoCode) { 
        throw ({message : "Promo code is required!"});
    }

    if(!data.percent) { 
        throw ({message : "Something went wrong!"});

    }

    const discount = new discountModel({ 
        promoCode : data.promoCode,
        percent : data.percent,
    })

    discount.save();
    return discount;
}


async function checkPromoCode(code) { 
    if(code === 'undefined') { 
        return ({message : "Invalid promo code!"});
    }
    return await discountModel.findOne({promoCode : code});
}

async function deletePromoCode(id) { 
    return await discountModel.deleteOne({_id : id});
}

module.exports = { 
    getAllDiscounts,
    createPromoCode,
    checkPromoCode,
    deletePromoCode,
}