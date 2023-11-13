import React, {useState} from "react";
import { Link } from "react-router-dom";

function BookItem({id, title, author, genre, readStatus, removeBook, updateBook}) {
    const [isRead] = useState(readStatus);

    function handleReadStatus(id) {
      const newstatus = !isRead;
      updateBook(id, newstatus);
      }

    return(
        <li>
            <span>{title} | <i>{author}</i></span>
            <span className="book-genre">{genre}</span>
            {isRead ?
                <Link to={`/reviews/${id}`}>Write a review</Link>
                :
                <button onClick={() => handleReadStatus(id)}>Mark as read</button>
            }
            <Link to={`/mybooks/${id}`}>View details</Link>
            <button onClick={() => removeBook(id)}>
                X
            </button>
    </li>
    )
}

export default BookItem;