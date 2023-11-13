import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function ReviewCard({id, title, review}) {

    return (
        <div className="review-card" id={id}>
            <h2>{title}</h2>
            <p>{review}</p>
            <Link to={`/reviews/${id}`}>Edit</Link>
        </div>
    )
}

export default ReviewCard;