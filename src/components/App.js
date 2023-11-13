import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";

import NavBar from "./NavBar";
import Home from "./Home";
import MyBooks from "./MyBooks";
import Reviews from "./Reviews";
import BookDetail from "./BookDetail";
import ReviewEntryForm from "./ReviewEntryForrm";

function App() {
  const [bookArray, setBookArray] = useState([]);

  useEffect( () => {
      fetch("https://bookshelfie.onrender.com/books")
          .then((response) => response.json())
          .then((data) => {
            setBookArray(data);
          });
      }, []);

  function updateBook(id, newstatus) {
    fetch(`https://bookshelfie.onrender.com/books/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        readStatus: newstatus,
      }),
    })
      .then((response) => response.json())
      .then((updatedBook) => updateBookArray(updatedBook));
  }

  function updateReview(id, newReview) {
    fetch(`https://bookshelfie.onrender.com/books/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        review: newReview,
      }),
    })
      .then((response) => response.json())
      .then((updatedBook) => updateBookArray(updatedBook));
  }
  
  function updateBookArray(updatedBook) {
    const newBookArray = bookArray.map(book => {
        if(book.id === updatedBook.id) {
            return updatedBook
        } else {
          return book
        }
    })
    setBookArray(newBookArray)
  }

  function removeBook(id) {
    fetch(`https://bookshelfie.onrender.com/books/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(() => removeFromBookArray(id));
  }

  function removeFromBookArray(id) {
    const newFoodArray = bookArray.filter((book) => book.id !== id);
    setBookArray(newFoodArray);
  }

  function addBook(newBook) {
    console.log(JSON.stringify(newBook));
        fetch('https://bookshelfie.onrender.com/books', {
            method: "POST",
            headers: {
                "Content-Type":"application/json",
            },
            body:JSON.stringify(newBook),
        })
        .then(response => response.json())
        .then(data => addToBookArray(data))
  }

  function addToBookArray(bookObj) {
    const newBookArray = [...bookArray, bookObj];
    setBookArray(newBookArray);
  }

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home bookArray={bookArray}/>
        </Route>
        <Route exact path="/mybooks">
          <MyBooks 
            bookArray={bookArray} 
            removeBook={removeBook} 
            addBook={addBook}
            updateBook={updateBook}
          />
        </Route>
        <Route path="/mybooks/:id">
          <BookDetail updateBook={updateBook} />
        </Route>
        <Route exact path="/reviews">
          <Reviews 
            bookArray={bookArray} 
          />
        </Route>
        <Route path="/reviews/:id">
          <ReviewEntryForm updateReview={updateReview}/>
        </Route>
        <Route path="*">
          <h1>404 not found</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;