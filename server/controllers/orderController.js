const { Router } = require('express');
const router = Router();
const menuService = require('../services/menuService');
const orderService = require('../services/orderService');
const auth = require('../middlewares/auth');
const isAdmin = require('../middlewares/isAdmin');
const isWorker = require('../middlewares/isWorker');


router.get('/' , auth , isWorker , async (req,res) => { 
    try {
        const category = req.query.category.split('-')[0][0].toUpperCase() + req.query.category.split('-')[0].substring(1);
        const data = await orderService.getAllOrders(Number(req.query.page) , category);
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


router.post('/make' , auth , async (req,res) => { 
    try {
        const data = await orderService.makeOrder(req.body[0] , req.body[1] , req.user._id);
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json(error);
    }
})

router.get('/:id' , auth ,  async (req,res) => { 
    try {
        const data = await orderService.getOrderByID(req.params.id);
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json(error);
    }
})

router.delete('/delete/:id' , auth , isWorker ,  async (req,res) => { 
    try {
        const data = await orderService.deleteOrderByID(req.params.id);
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json(error);
    }
})

router.patch('/update/:id' , auth , isWorker ,  async (req,res) => { 
    try {
        const data = await orderService.updateOrder(req.params.id , req.body);
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json(error);
    }
})

module.exports = router;