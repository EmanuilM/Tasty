const { Router } = require('express');
const router = Router();
const reservationService = require('../services/reservationService');
const auth = require('../middlewares/auth');
const isAdmin = require('../middlewares/isAdmin');
const isWorker = require('../middlewares/isWorker');


router.get('/all' , auth , isWorker ,  async (req,res) => { 
    try {
        const data = await reservationService.getAllReservations(Number(req.query.page));
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json(error);
    }
})


router.get('/reservation/:id' , auth , isAdmin , async (req,res) => { 
    try {
        const data = await reservationService.getReservationByID(req.params.id);
        res.status(200).json(data);
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
        const data = await reservationService.createReservation(req.body , req.user._id , req.query.table);
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json(error);
    }
})


router.delete('/delete/:id' , auth , isWorker , async (req,res) => { 
    try {
        const data = await reservationService.deleteReservation(req.params.id);
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json(error);
    }
})


router.patch('/update/:id' , auth , isWorker , async (req,res) => { 
    try {
        const data = await reservationService.updateReservation(req.params.id , req.body);
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json(error);
    }
})


module.exports = router;