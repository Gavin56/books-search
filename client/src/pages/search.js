// import axios from 'axios';
import React, { useState, useEffect } from "react";
import API from "../utils/API";
import Grid from "../components/Grid/index";
import GridItem from "../components/GridItem/index";
import BookCard from "../components/BookCard/index";
import Container from "../components/Container/index";

function Search() {
  const [search, setSearch] = useState("");
  const [googleBooks, setGoogleBooks] = useState([]);
  const [displayData, setDisplayData] = useState([]);

  const handleInputChange = (event) => {
    setSearch(event.target.value);
    // console.log(search);
  };
  const handleBtnClick = () => {
    API.getGoogleBooks(search).then((res) => {
      //console.log(res);
      setGoogleBooks(res.data.items);
    });
  };

  //console.log(googleBooks);

  useEffect(() => {
    if (googleBooks) {
      const showBooks = googleBooks.map((books) => {
        return (
          <Container>
            <Grid>
              <GridItem>
                <BookCard
                    key={books.id}
                    title={books.volumeInfo.title}
                    thumbnail={books.volumeInfo.imageLinks.smallThumbnail} 
                    authors={books.volumeInfo.authors + ""}
                    description={books.volumeInfo.description}
                    >
                    {/* View */}
                </BookCard>
              </GridItem>
            </Grid>
          </Container>
        );
      });
      setDisplayData(showBooks);
    }
  }, [googleBooks]);
  return (
    <div>
      <p>Here</p>
      <input placeholder="Search Book" onChange={handleInputChange} />
      <button onClick={handleBtnClick}>Search</button>
      <div>{displayData}</div>
    </div>
  );
}

export default Search;
