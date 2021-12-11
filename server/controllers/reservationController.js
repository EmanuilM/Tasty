const { Router } = require('express');
const router = Router();
const reservationService = require('../services/reservationService');
const auth = require('../middlewares/auth');
const isAdmin = require('../middlewares/isAdmin');


router.get('/all' , auth , isAdmin ,  async (req,res) => { 
    try {
        const data = await reservationService.getAllReservations();
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json(error);
    }
})


router.get('/reservation/:id' , auth , isAdmin , async (req,res) => { 
    try {
        
    } catch (error) {
        res.status(400).json(error);
    }
})



router.get('/find-tables' , auth , async (req,res) => { 
    try {
        const data = await reservationService.getFreeTables();
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json(error);
    }
})

router.post('/create' , auth , async (req,res) => { 
    try {
        const data = await reservationService.createReservation(req.body , req.user._id);
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json(error);
    }
})


router.delete('/delete/:id' , auth , isAdmin , async (req,res) => { 
    try {
        const data = await reservationService.deleteReservation(req.params.id);
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json(error);
    }
})


router.patch('/update/:id' , auth , isAdmin , async (req,res) => { 
    try {
        const data = await reservationService.updateReservation(req.params.id , req.body);
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json(error);
    }
})


module.exports = router;