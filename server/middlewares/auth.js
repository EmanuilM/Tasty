const jwt = require('jsonwebtoken');


module.exports = (req,res,next) => { 
    const token = req.cookies.AUTHENTICATION_COOKIE;
    if(token) { 
        jwt.verify(token , process.env.SECRET_WORD , (error , decoded) => { 
            error ? console.log(error) : 
            req.user = decoded;
            res.locals.user = decoded;
            res.locals.isAuth = true;
        })
    }else { 
       return res.status(403).json({message : "You must be logged in"})
    }

    next();

}