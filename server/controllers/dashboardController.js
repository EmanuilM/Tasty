const { Router } = require('express');
const router = Router();
const dashboardService = require('../services/dashboardService');


router.get('/' ,  async (req,res) => { 
    try {
        const data = await dashboardService.getDashboardData();
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json(error);
    }
})

router.post('/create' , async (req,res) => { 
    try {
        const data = await dashboardService.createDashboard();
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json(error);
    }
})





module.exports = router;