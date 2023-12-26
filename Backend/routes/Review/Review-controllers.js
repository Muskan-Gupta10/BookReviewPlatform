const ReviewModel= require('../../schemas/ReviewsSchema')

const postReview=async(req,res)=>{
    try {
        const data=req.body
        console.log(data)
        const review= await ReviewModel.create(data)
        //console.log(review)
        res.status(200).json({message:"review posted successfully", review})
    } catch (error) {
        res.status(404).json({error})
    }
}
const getAllReviews=async(req,res)=>{

}
module.exports={postReview,getAllReviews}