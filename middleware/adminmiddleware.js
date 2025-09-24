const jwt = require("jsonwebtoken")
const {secret}=require("../config")


function adminmiddleware(req,res,next){

const token = req.headers.token

const decoded = jwt.verify(token,secret)

if(decoded){
    req.userId=decoded.id
    next()
}else{
    res.status(403).json({message:"you are not signed in..."})
}
}

module.exports={
    adminmiddleware
}