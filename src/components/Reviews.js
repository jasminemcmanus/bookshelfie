import React from "react";

import ReviewCard from "./ReviewCard";

function Reviews({bookArray}) {

    const reviewsToDisplay = bookArray.filter((book) => {
        return book.review !== "";
    });

    const reviewList = reviewsToDisplay.map((book) => {
        return <ReviewCard 
                    key={book.id}
                    id={book.id}
                    title={book.title} 
                    review={book.review}
                />
    })

    return (
        <div >
            {reviewList.length !== 0 ? 
                reviewList 
                : 
                <div className="review-list">
                    <p>You haven't written any reviews yet.</p>
                </div>
            }
        </div>
    )
}

export default Reviews;