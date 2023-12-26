const mongoose= require('mongoose')
const ObjectId= mongoose.Schema.Types.ObjectId

const reviewSchema= new mongoose.Schema({
    username: {type:String, required:true},
    rating: {type:Number, required: true},
    comments:{type:String, required:true},
    // bookId: {
    //     type: ObjectId,
    //     required:true,
    //     ref: "Book",
    //     trim: true
    // }
})

module.exports= mongoose.model('Review',reviewSchema)