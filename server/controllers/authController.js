const { Router } = require('express');
const router = Router();
const authService = require('../services/authService');

router.post('/register', async (req, res) => {
    try {
        const token = await authService.register(req.body);
        if (process.env.NODE_ENV === 'production') {
            res.cookie(process.env.AUTH_COOKIE, token, { httpOnly: true, secure: true });
        } else {
            res.cookie(process.env.AUTH_COOKIE, token, { httpOnly: true });
        }
        res.status(200).json(token);
    } catch (error) {
        res.status(400).json(error);
    }
});

router.post('/login', async (req, res) => {
    try {
        const token = await authService.login(req.body);
        if (process.env.NODE_ENV === 'production') {
            res.cookie(process.env.AUTH_COOKIE, token, { httpOnly: true, secure: true });
        } else {
            res.cookie(process.env.AUTH_COOKIE, token, { httpOnly: true });
        }
        res.status(200).json(token);
    } catch (error) {
        res.status(400).json(error);
    }
});


module.exports = router;