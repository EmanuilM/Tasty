const { Router } = require('express');
const router = Router();
const tablesService = require('../services/tablesService');


router.get('/' , async (req,res) => { 
    try {
        const data = await tablesService.getTables();
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json(error);
    }
});


router.post('/create' , async (req,res) => { 
    try {
        const data = await tablesService.createTable(req.body);
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json(error);        
    }
});


router.post('/delete/:id' , async (req,res) => { 
    try {
        const data = await tablesService.deleteTable(req.params.id);
        res.status(200).json(data);    
    } catch (error) {
        res.status(400).json(error);
    }
})

router.post('/add-product' , async (req,res) => { 
    try {
        const data = await tablesService.addProduct(req.body);
        res.status(200).json(data)        
    } catch (error) {
        res.status(400).json(error);
    }
})



module.exports = router;