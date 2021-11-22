const { Router } = require('express');
const router = Router();
const authService = require('../services/authService');
const jwt = require('jsonwebtoken');
const auth = require('../middlewares/auth');


const orders = jwt.sign({ orderedProducts: [] }, process.env.SECRET_WORD);

router.get('/', async (req, res) => {

    if (req.cookies.AUTHENTICATION_COOKIE) {
        try {
            const user = jwt.verify(req.cookies.AUTHENTICATION_COOKIE, process.env.SECRET_WORD);
            return res.json(user)
        } catch (error) {

            return res.clearCookie(process.env.AUTH_COOKIE);
        }
    }
    return res.json(undefined);
});

router.post('/register', async (req, res) => {
    try {
        const data = await authService.register(req.body);
        if (process.env.NODE_ENV === 'production') {
            res.cookie(process.env.AUTH_COOKIE, data.token, { httpOnly: true, secure: true, maxAge: 86400000 });
        } else {
            res.cookie(process.env.AUTH_COOKIE, data.token, { httpOnly: true, secure: true, maxAge: 86400000 });
        }
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json(error);
    }
});

router.post('/login', async (req, res) => {
    try {
        const data = await authService.login(req.body);
        if (process.env.NODE_ENV === 'production') {
            res.cookie(process.env.AUTH_COOKIE, data.token, { httpOnly: true, secure: true, maxAge: 86400000 });
        } else {
            res.cookie(process.env.AUTH_COOKIE, data.token, { httpOnly: true, maxAge: 86400000 });
        }
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json(error);
    }
});

router.post('/logout', (req, res) => {
    res.clearCookie(process.env.AUTH_COOKIE);
    res.clearCookie(process.env.ORDER_COOKIE);
    res.status(200).json({});
});


module.exports = router;