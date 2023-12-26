const mongoose = require('mongoose')
const BookDetailsSchema=new mongoose.Schema({

    userId:{
        type: String,
        required : true,
        
    },
    title:{
        type: String,
        required : true
    },
    author : {
        type: String,
        required : true
    },
    image :{
        type: String,
        required : true,
        trim:true
    },
   rating: {
    type:Number,
    default:0,
    required: true
   }
})
const BookModel= new mongoose.model('Book',BookDetailsSchema)
module.exports=BookModel