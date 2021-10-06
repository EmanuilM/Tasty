const { Router } = require('express');
const router = Router();
const authController = require('./controllers/authController');


router.use('/api/auth' , authController);

module.exports = router;