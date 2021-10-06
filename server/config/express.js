const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const router = require('../router');
module.exports = (app) => { 
    app.use(express.json());
    app.use(express.urlencoded({extended : true}));
    app.use(cookieParser());
    app.use(cors({
        origin: process.env.origin,
        credentials : true
    }))
    app.use(router);
}