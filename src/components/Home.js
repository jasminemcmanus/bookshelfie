import React from "react";
import { Link } from "react-router-dom";

function Home({bookArray}) {

    const readBooks = bookArray.filter((book) => {
        return book.readStatus === true;
    });

    const bookCounter = readBooks.length;

    return (
        <div id="home">
            <h1>Welcome to Book Shelfie!</h1>
            <p>You've read {bookCounter} books so far.</p>
            <Link to={`/mybooks`}>Get Started</Link>
        </div>
    )
}

export default Home;