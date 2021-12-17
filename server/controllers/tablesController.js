const { Router } = require('express');
const router = Router();
const tablesService = require('../services/tablesService');
const auth = require('../middlewares/auth');
const isAdmin = require('../middlewares/isAdmin');
const isWorker = require('../middlewares/isWorker');


router.get('/' , auth , isWorker , async (req,res) => { 
    try {
        const data = await tablesService.getTables();
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json(error);
    }
});

router.get('/table/:id' , auth , isWorker ,  async (req,res) => { 
    try {
        const data = await tablesService.getTableByID(req.params.id);
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json(error);
    }
})


router.post('/create' , auth , isAdmin ,  async (req,res) => { 
    try {
        const data = await tablesService.createTable(req.body);
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json(error);        
    }
});


router.post('/delete/:id' , auth , isAdmin , async (req,res) => { 
    try {
        const data = await tablesService.deleteTable(req.params.id);
        res.status(200).json(data);    
    } catch (error) {
        res.status(400).json(error);
    }
})

router.post('/add-product' , auth , isWorker , async (req,res) => { 
    try {
        const data = await tablesService.addProduct(req.body);
        res.status(200).json(data)        
    } catch (error) {
        res.status(400).json(error);
    }
})

router.patch('/delete-product/:id' , auth , isWorker ,  async (req,res) => { 
    try {
        const data = await tablesService.deleteProduct(req.params.id , req.body);
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json(error);
    }
})

router.patch('/change-status/:id' , async (req,res) => { 
    try {
        const data = await tablesService.changeTableStatusToActive(req.params.id);
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json(error);
    }
})



module.exports = router;