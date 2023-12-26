import React from 'react'
import reviewData from '../reviewData'
const BookDetails = () => {
  return (
    <div>

        {reviewData.map((review)=>(
            <>
                <div>Reviwer Name : {review.name}</div>
                <div>Rating : {review.rating}/5</div>
                <div>Comments : {review.comments}</div>
                </>
        ))}
        <button className="border border-black">Add a Review</button>
    </div>
  )
}

export default BookDetails