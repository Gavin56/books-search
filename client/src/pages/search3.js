// import axios from 'axios';
import React, { useState } from 'react'
import API from "../utils/API";


function Search() {
    const [search, setSearch] = useState("");
    const [googleBooks, setGoogleBooks] = useState([]);

    const handleInputChange = (event) => {
        setSearch(event.target.value)
        // console.log(search);
    }
    const handleBtnClick = () => {
        API.getGoogleBooks(search)
            .then(res => {
                //console.log(res);
                setGoogleBooks(res.data.items);
            });
    }

    //console.log(googleBooks);


    const handleSavedBooks = (id) => {
        const savedBooks = googleBooks.find((savedBooks) => savedBooks.id === id)

        console.log(savedBooks);
        API.saveBook({
            googleId: savedBooks.id,
            title: savedBooks.volumeInfo.title,
            image: savedBooks.volumeInfo.imageLinks.thumbnail,
            author: savedBooks.volumeInfo.authors.join(", "),
            description: savedBooks.volumeInfo.description,
            link: savedBooks.volumeInfo.infoLink
        }).then(() => googleBooks)
            .catch((err) => {
                console.log(err);
            })


    }
    return (
        <div>
            <p>Here</p>
            <input placeholder="Search Book" onChange={handleInputChange} />
            <button onClick={handleBtnClick}>
                Search
            </button>
            <div>
                {googleBooks.map((books) => {
                    return (
                        <div key={books.id}>
                            <p>{books.volumeInfo.title}</p>
                            <img src={books.volumeInfo.imageLinks.thumbnail} alt="book img" />
                            <p>{books.volumeInfo.authors.join(", ")}</p>
                            <p>{books.volumeInfo.description}</p>
                            <button onClick={() => handleSavedBooks(books.id)}>
                                Save
                            </button>
                            <a target="_blank" href={books.volumeInfo.infoLink} rel="noreferrer">View</a>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Search
