const { Router } = require('express');
const router = Router();
const authController = require('./controllers/authController');
const dailyMenuController = require('./controllers/dailyMenuController');


router.use('/api/auth' , authController);
router.use('/api/daily-menu' , dailyMenuController);

module.exports = router;