const { Router } = require('express');
const router = Router();
const reservationService = require('../services/reservationService');


router.get('/all' , async (req,res) => { 
    try {
        const data = await reservationService.getAllReservations();
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json(error);
    }
})


router.get('/reservation/:id' , async (req,res) => { 
    try {
        
    } catch (error) {
        res.status(400).json(error);
    }
})



router.get('/find-tables' , async (req,res) => { 
    try {
        const data = await reservationService.getFreeTables();
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json(error);
    }
})

router.post('/create' , async (req,res) => { 
    try {
        const data = await reservationService.createReservation(req.body);
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json(error);
    }
})


router.delete('/delete/:id' , async (req,res) => { 
    try {
        const data = await reservationService.deleteReservation(req.params.id);
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json(error);
    }
})


router.patch('/update/:id' , async (req,res) => { 
    try {
        const data = await reservationService.updateReservation(req.params.id , req.body);
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json(error);
    }
})


module.exports = router;