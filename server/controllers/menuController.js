const { Router } = require('express');
const router = Router();
const menuService = require('../services/menuService');


router.get('/:category' ,  async (req,res) => { 
    try {
        const data = await menuService.getProductsByMenuCategory(req.params.category);
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json(error);
    }
})

router.post('/create-product' , async (req,res) => { 
    try {
        const data =  await menuService.createProduct(req.body);
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json(error);
    }
})

module.exports = router;