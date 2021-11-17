const e = require('express');
const menuModel = require('../models/menuModel');

async function getAllProducts(category , page) { 
    if(category === 'undefined') { 
        return Promise.all([
             menuModel.find({}),
             menuModel.find({}).skip((page - 1) * 12).limit(12)
        ]
        )
    }else { 
        return Promise.all([
             menuModel.find({}),
             menuModel.find({category}).skip((page - 1) * 12).limit(12)
        ])
    } 
}




module.exports = { 
    getAllProducts,
}