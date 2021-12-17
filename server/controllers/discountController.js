const { Router } = require('express');
const router = Router();
const discountService = require('../services/discountService');
const auth = require('../middlewares/auth');
const isAdmin = require('../middlewares/isAdmin');



router.get('/'  , async (req,res) => {
    try {
        const data = await discountService.getAllDiscounts(Number(req.query.page));
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json(error);
    }
})

router.post('/create' , auth ,  isAdmin , async (req,res) =>{ 
    try {
        const data = await discountService.createPromoCode(req.body);
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json(error);
    }
})

router.get('/check/:code' , auth ,  async (req,res) => { 
    try {
        const data = await discountService.checkPromoCode(req.params.code);
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json(error);
    }
})

router.delete('/delete/:id' , auth ,  isAdmin , async (req,res) => { 
    try {
        const data = await discountService.deletePromoCode(req.params.id);
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json(error);
    }
})

router.patch('/update/:id' , auth ,  isAdmin ,  async (req,res) => { 
    try {
        const data = await discountService.updatePromoCode(req.params.id , req.body);
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json(error);
    }
})

router.get('/:id' , auth , async (req,res) => {
    try {
        const data = await discountService.getPromoCodeByID(req.params.id);
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json(error);
    }
})


module.exports = router;