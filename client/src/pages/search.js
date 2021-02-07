// import axios from 'axios';
import React, { useState, useEffect } from 'react'
import API from "../utils/API";


function Search() {
    const [search, setSearch] = useState("");
    const [googleBooks, setGoogleBooks] = useState([]);
    const [displayData, setDisplayData] = useState([])

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


    useEffect(() => {
        if (googleBooks) {
            const showBooks = googleBooks.map((books, i) => {
                return (
                    <div key={i}>
                        <p>{books.volumeInfo.title}</p>
                        <img src={books.volumeInfo.imageLinks.smallThumbnail} />
                        <p>{books.volumeInfo.authors + ""}</p>
                        <p>{books.volumeInfo.description}</p>
                        <a target="_blank" href={books.volumeInfo.infoLink} rel="noreferrer">View</a>
                    </div>
                )

            });
            setDisplayData(showBooks);
        }
    }, [googleBooks])
    return (
        <div>
            <p>Here</p>
            <input placeholder="Search Book" onChange={handleInputChange} />
            <button onClick={handleBtnClick}>
                Search
            </button>
            <div>
                {displayData}
            </div>


        </div>
    )
}

export default Search
