const jwt= require('jsonwebtoken')
require('dotenv').config()

const AuthenticateUser=(req,res,next)=>{
    const token= req.headers.authorization.split(' ')[1]
    console.log(token)
     if(!token){
        res.status(400).json({message:'Token not found'})
     }
     jwt.verify(token,process.env.SECRET_KEY,(err,decoded)=>{
        if(err){
            res.status(404).json({message:'Invalid token'})
        }
       // console.log(decoded)
        req.user=decoded
        next()
     })
}
module.exports= AuthenticateUser