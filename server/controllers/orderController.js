const { Router } = require('express');
const router = Router();
const menuService = require('../services/menuService');
const orderService = require('../services/orderService');


router.get('/' , async (req,res) => { 
    try {
        const data = await orderService.getAllOrders();
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json(error);
    }
})

router.get('/all-products/:category', async (req, res) => {
    try {
        const data = await orderService.getAllProducts(req.params.category, Number(req.query.page))
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json(error);
    }
})

router.get('/product/:id', async (req, res) => {
    try {
        const data = await orderService.getProductByID(req.params.id);
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json(error);
    }
})


router.post('/make' , async (req,res) => { 
    try {
        const data = await orderService.makeOrder(req.body[0] , req.body[1]);
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json(error);
    }
})

router.get('/:id' ,  async (req,res) => { 
    try {
        const data = await orderService.getOrderByID(req.params.id);
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json(error);
    }
})

router.delete('/delete/:id' , async (req,res) => { 
    try {
        const data = await orderService.deleteOrderByID(req.params.id);
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json(error);
    }
})


module.exports = router;