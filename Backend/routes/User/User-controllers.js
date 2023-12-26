const userModel =require('../../schemas/UserSchema')
const jwt= require('jsonwebtoken')
const bcrypt= require('bcrypt')
const dotenv=require('dotenv')
dotenv.config()

const secretKey=process.env.SECRET_KEY

////creating user
const createUser= async(req,res)=>{
    try {
        const data= req.body
    const{username,email,password}=data

    let findUser = await userModel.findOne({email})
    if(findUser){
        res.status(404).json({message:'User exists with this email'})
    }
    else{
        //encrypting password
        bcrypt.hash(password,10,async(err,hash)=>{ //bcrypt.hash(yourpassword, salt/rounds,callback)
            if(err){
                res.json({message:'something went wrong,try later',error:err})
            }
            else{
                const newuser= await userModel.create({username,email,password:hash})
                res.status(200).json({message: "new user created",newuser})
            }
        })
    
    }
    } 
    catch (error) {
            res.status(404).json({message:'can not create the user',error})
    }

}
////login
const login= async(req,res)=>{
    const data=req.body
    let {email,password}=data
    //console.log(data)
    if(data.length<1){
        res.status(404).json({message:'Please fill the details'})
    }

    let findUser = await userModel.findOne({email})
    if(!findUser){
        res.status(404).json({message:'No user exists with this email'})
    }
    
    else{
        //comparing passwords
        console.log(findUser)
        bcrypt.compare(password,findUser.password,(err,result)=>{
            if(err){
                res.status(404).json({
                    message:'Authentication Failed'
                })
            }
            if(result){
                //generating token 
                const payload={username:findUser.username,
                                userid:findUser._id}

                const token= jwt.sign(payload,secretKey,{expiresIn:'1h'})

                res.status(200).json({message:'Login successful', token:token})
            }
            else{
                res.status(404).json({
                    message:'Invalid Password'
                })
            }
        })
    }

}

module.exports={createUser,login}