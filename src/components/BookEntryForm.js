import React, { useState } from "react";

import genres from "../data/data";

function BookEntryForm({addBook, readStatus}) {
    const [formDisplay, setFormDisplay] = useState(false);

    const [title, setTitle] = useState("")
    const [authorName, setAuthorName] = useState("")
    const [genre, setGenre] = useState("")

    function handleSubmit(event) {
        event.preventDefault()
        const newBook = {
            title,
            authorName,
            genre,
            readStatus: readStatus,
            review: ""
        }
        addBook(newBook);
        setFormDisplay(!formDisplay);
        setTitle("");
        setAuthorName("");
        setGenre("");
    }

    const genreOption = genres.map((genre) => {
        return  <option key={genre} value={genre}>{genre}</option>
    })

    function toggleForm() {
        setFormDisplay(!formDisplay);
    }

    const formClass = formDisplay ? "show" : "hide";

    return (
        <div className="form-container">
            <button onClick={toggleForm}>add books to library</button>
            <form className={formClass} onSubmit={handleSubmit}>
                    <label htmlFor="title">Title:</label>
                    <input 
                        type="text" 
                        id="title" 
                        value={title} 
                        onChange={e => setTitle(e.target.value)}
                        />
                    <label htmlFor="author">Author:</label>
                    <input 
                        type="text" 
                        id="author" 
                        value={authorName} 
                        onChange={e => setAuthorName(e.target.value)}
                        />
                    <label htmlFor="genre">Genre:</label>
                    <select id="genre" value={genre} onChange={e => setGenre(e.target.value)}>
                        <option value="" disabled selected></option>
                        {genreOption}
                    </select>
                    <button type="submit">Add Book</button>
            </form>
        </div>
    )
}

export default BookEntryForm;