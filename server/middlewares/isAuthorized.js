module.exports = (req,res,next) => { 
    console.log(req.user)
    if(req.user.isAdmin || req.user.isWorker) { 
        next();
    }else { 
        res.status(401).json({message : "You are not allowed to make this action! You must be an administrator!"})
    }
}