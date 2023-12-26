const mongoose= require('mongoose')

const userSchema= new mongoose.Schema({
    username:{
        type: String,
        required:true
    },
    email:{
        type: String,
        required:true,
        lowercase: true
    },
    password:{
        type: String,
        required:true,
        minlength :8,
        
        trim:true
    }
})
module.exports= mongoose.model('User',userSchema)