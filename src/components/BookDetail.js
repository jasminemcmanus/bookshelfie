import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function BookDetail({updateBook}) {
    const [book, setBook] = useState(null);
    const [isRead, setIsRead] = useState(null);
    
    const {id} = useParams()

    useEffect(() => {
        fetch(`https://bookshelfie.onrender.com/books/${id}`)
            .then(r => r.json())
            .then(data => updatePage(data))
    }, [id])

    function updatePage(data) {
        setBook(data);
        setIsRead(data.readStatus)
    }
    
    if (!book) return <h2>Loading...</h2>
    
    const { title, authorName, genre, review } = book
    

    function handleReadStatus(id) {
      const newstatus = !isRead;
      updateBook(id, newstatus);
      setIsRead(!isRead);
      }

    return (
        <section>
            <div className="book-item">
                <div>
                    <h1>{title}</h1>
                    <p>{authorName} | {genre}</p>
                    <p>Read status: <span className="book-genre">{isRead ? "read" : "unread"} </span></p>
                    <button onClick={() => handleReadStatus(id)}>
                        Change status to {isRead ? "unread" : "read"}
                    </button>
                </div>
                <div>
                    <p><strong>Review:</strong></p>
                    <p>{review !== "" ? review : "You haven't written a review yet."}</p>
                    <Link to={`/reviews/${id}`}>{review !== "" ? "Edit" : "Write a review."}</Link>
                </div>
            </div>
        </section>
    );
}

export default BookDetail;
