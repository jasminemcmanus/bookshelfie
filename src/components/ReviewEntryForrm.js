import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function ReviewEntryForm({updateReview}) {
    const [book, setBook] = useState(null);
    const [postContent, setPostContent] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const {id} = useParams()

    useEffect(() => {
        fetch(`https://bookshelfie.onrender.com/books/${id}`)
            .then(r => r.json())
            .then(data => testFunction(data))
    }, [id])
    
    function testFunction(data) {
        setBook(data);
        setPostContent(data.review)
    }

    if (!book) return <p>Loading...</p>
    
    const { title } = book;

    function handleSubmit(event) {
        event.preventDefault()
        const id = event.target.id;
        const newReview = postContent;
        updateReview(id, newReview)
        setIsSubmitted(true);
    }

    return (
        <React.Fragment>
        {!isSubmitted ? 
            <form className="review-form" id={id} onSubmit={handleSubmit}>
                <h2>REVIEW | {title}</h2>
                <textarea
                    id={id}
                    name="new-review"
                    value={postContent}
                    onChange={e => setPostContent(e.target.value)}
                    >
                </textarea>
                <button type="submit">Submit Review</button>
            </form>
        :
        <div className="review-confirmation">
            <h1>Review submitted!</h1>
            <div className="review-card">
                <p>{title}</p>
                <p>{postContent}</p>
            </div>
            <Link to={`/mybooks/${id}`}>View book</Link>
            <Link to={`/reviews`}>View reviews</Link>
        </div>
        }   
        </React.Fragment>
    );
}

export default ReviewEntryForm;
