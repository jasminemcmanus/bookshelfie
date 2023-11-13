import React, {useState} from "react";

import BookItem from "./BookItem";
import BookEntryForm from "./BookEntryForm";

function MyBooks({bookArray, removeBook, addBook, updateBook}) {
    const [displayBooks, setDisplayBooks] = useState(true);
    const [filterBy, setFilterBy] = useState("All");

    function toggleBookDisplay(status) {
        setDisplayBooks(status);
    }
    
    const booksToDisplay = bookArray.filter((book) => {
            return book.readStatus === displayBooks;
    });

    const genreList = booksToDisplay.map( book => book.genre)
    const uniqueGenreList = genreList.reduce(
        (unique, item) => (unique.includes(item) ? unique : [...unique, item]),
        [],
      );
    const genreFilter = uniqueGenreList.map((genre) => {
        return <option value={genre}>{genre}</option>
    })

    function filterItems(event) {
        setFilterBy(event.target.value);
      }
    
    const filteredList = booksToDisplay.filter((book) => {
        if (filterBy === "All") {
          return true;
        } else {
          return book.genre === filterBy;
        }
      });

      const bookList = filteredList.map((book) => {
        return <BookItem 
            key={book.id}
            id={book.id}
            title={book.title} 
            author={book.authorName} 
            genre={book.genre}
            readStatus={book.readStatus}
            removeBook={removeBook}
            updateBook={updateBook}

        />
    })


    return (
        <div id="my-books">
            <div className="toggle-button-container">
                <div 
                    className={displayBooks ? "active" : ""}
                    onClick={() => toggleBookDisplay(true)}>
                    Read
                </div>
                <div 
                    className={displayBooks ? "" : "active"}
                    onClick={() => toggleBookDisplay(false)}>
                    Want To Read
                </div>
            </div>

            <BookEntryForm addBook={addBook} readStatus={displayBooks}/>

            <div className="genre-select">
                <label htmlFor="genre-filter">Filter by genre:</label>
                <br />
                <select name="genre-filter" id="genre-filter" onChange={filterItems}>
                    <option value="All">All</option>
                    {genreFilter}
                </select>
            </div>

            <div className="book-list">
                {bookList.length !== 0 ? 
                    bookList 
                    : 
                    <div>
                        <p>There are no books to display.</p>
                    </div>

                }
            </div>

        </div>
    )
}

export default MyBooks;