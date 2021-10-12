const { Router } = require('express');
const router = Router();
const dailyMenuService = require('../services/dailyMenuService');

router.get('/', async (req, res) => {
    try {
        const data = await dailyMenuService.getDailyMenu();
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json(error);
    }
});

router.post('/create-product', async (req, res) => {
    try {
        const data = await dailyMenuService.createProduct(req.body);
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json(error)
    }
});

router.post('/delete-product/:id' , async (req,res) => {
    try {
        const data = await dailyMenuService.deleteProduct(req.params.id);
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json(error);
    }
});

router.post('/edit-product/:id' , async (req,res) => { 
    try {
        const data = await dailyMenuService.editProduct(req.params.id , req.body);
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json(error);
    }
});

router.get('/product/:id' , async (req,res) => { 
    try {
        const data = await dailyMenuService.getProductByID(req.params.id);
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json(error);
    }
});

module.exports = router;