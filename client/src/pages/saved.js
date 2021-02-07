import React, { useState, useEffect } from 'react';
import API from "../utils/API";

function Saved() {
    const [displayData, setDisplayData] = useState([])

    useEffect(() => {
        loadBooks()
    }, [])

    function loadBooks() {
        API.getSavedBooks()
            .then(res => {
                console.log(res.data);
                setDisplayData(res.data);
            })
    };

    function deleteBook(id) {
        API.deleteBook(id)
            .then(res => loadBooks())
            .catch(err => console.log(err));
    }

    return (
        <div>
            Saved

            <div>
                {/* mongooswe _id is used to control the key and delete button for the displayed data. allows the request to not be an unprocessed entity. */}
                {displayData.map((data) => {
                    return (
                        <div key={data._id}>
                            <p>{data.title}</p>
                            <img src={data.image} alt="saved book"/>
                            <p>{data.author}</p>
                            <p>{data.description}</p>
                            <a target="_blank" href={data.link} rel="noreferrer">View</a>
                            <button onClick={() => deleteBook(data._id)}>
                                Delete
                            </button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Saved
