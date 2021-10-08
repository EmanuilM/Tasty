const { Router } = require('express');
const router = Router();
const authService = require('../services/authService');

router.post('/register', async (req, res) => {
    try {
        const data = await authService.register(req.body);
        if (process.env.NODE_ENV === 'production') {
            res.cookie(process.env.AUTH_COOKIE, data.token, { httpOnly: true, secure: true } );
        } else {
            res.cookie(process.env.AUTH_COOKIE, data.token, { httpOnly: true } );
        }
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json(error.message);
    }
});

router.post('/login', async (req, res) => {
    try {
        const data = await authService.login(req.body);
        if (process.env.NODE_ENV === 'production') {
            res.cookie(process.env.AUTH_COOKIE, data.token, { httpOnly: true, secure: true });
        } else {
            res.cookie(process.env.AUTH_COOKIE, data.token, { httpOnly: true });
        }
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json(error);
        
    }
});

router.post('/logout' , (req,res) => { 
    res.clearCookie(process.env.AUTH_COOKIE);
    res.status(200).json({});
});


module.exports = router;