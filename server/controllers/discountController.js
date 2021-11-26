const { Router } = require('express');
const router = Router();
const discountService = require('../services/discountService');


router.get('/'  , async (req,res) => {
    try {
        const data = await discountService.getAllDiscounts();
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json(error);
    }
})

router.post('/create' , async (req,res) =>{ 
    try {
        const data = await discountService.createPromoCode(req.body);
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json(error);
    }
})

router.get('/check/:code' , async (req,res) => { 
    try {
        const data = await discountService.checkPromoCode(req.params.code);
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json(error);
    }
})

router.delete('/delete/:id' , async (req,res) => { 
    try {
        const data = await discountService.deletePromoCode(req.params.id);
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json(error);
    }
})

module.exports = router;