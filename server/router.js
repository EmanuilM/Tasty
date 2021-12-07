const { Router } = require('express');
const router = Router();
const authController = require('./controllers/authController');
const dailyMenuController = require('./controllers/dailyMenuController');
const tablesController = require('./controllers/tablesController');
const menuController = require('./controllers/menuController');
const orderController = require('./controllers/orderController');
const discountController = require('./controllers/discountController');
const reservationController = require('./controllers/reservationController');


router.use('/api/auth' , authController);
router.use('/api/daily-menu' , dailyMenuController);
router.use('/api/tables' , tablesController);
router.use('/api/menu' , menuController);
router.use('/api/orders' , orderController);
router.use('/api/discount' , discountController);
router.use('/api/reservation' , reservationController);

module.exports = router;