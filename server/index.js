const express = require('express');
const app = express();
const dotenv = require('dotenv')

dotenv.config({
    path : `${__dirname}/config/.env.${process.env.NODE_ENV.trim()}`
});

async function startServer() { 
    try {
        require('./config/db')
        require('./router');
        require('./config/express')(app);
        app.listen(process.env.PORT , () => console.log(`Server is running on port ${process.env.PORT}`));
    } catch (error) {
        console.log(error);
    }
}
startServer();