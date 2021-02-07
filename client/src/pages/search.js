// import axios from 'axios';
import React, { useState, useEffect } from "react";
import API from "../utils/API";
import Grid from "@material-ui/core/Grid";
import BookCard from "../components/BookCard/index";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import BooksIcon from "@material-ui/icons/LibraryBooksOutlined";

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
      console.log(res);
      setGoogleBooks(res.data.items);
    });
  };

  //console.log(googleBooks);

  useEffect(() => {
    if (googleBooks) {
      const showBooks = googleBooks.map((books) => {
        return (
          <Container key={books.id}>
            <Grid container spacing={7}>
              <Grid item xs={12}>
                <BookCard
                  key={books.id}
                  title={books.volumeInfo.title}
                  thumbnail={books.volumeInfo.imageLinks.smallThumbnail}
                  authors={books.volumeInfo.authors + ""}
                  description={books.volumeInfo.description}
                  link={books.volumeInfo.selfLink}
                >
                </BookCard>
              </Grid>
            </Grid>
          </Container>
        );
      });
      setDisplayData(showBooks);
    }
  }, [googleBooks]);

  return (
    <Container>
      <Paper
        style={{
          backgroundColor: "#474747",
          marginBottom: 100,
          paddingBottom: 25,
        }}
      >
        <Paper
          elevation={4}
          style={{ backgroundColor: "#474747", height: 200, marginBottom: 35 }}
        >
          <div>
            <h1 style={{ textAlign: "center", color: "white", paddingTop: 15 }}>
              <BooksIcon
                fontSize="large"
                style={{ marginRight: 10 }}
              ></BooksIcon>
              Welcome to Google Books!
            </h1>

            <Grid
              item
              xs={12}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <input placeholder="Search Book" onChange={handleInputChange} />
              <button onClick={handleBtnClick}>Search</button>
            </Grid>
          </div>
        </Paper>

        {displayData.length ? (
          <div>{displayData}</div>
        ) : (
          <p style={{ textAlign: "center", color:"white" }}>
            Searched books will appear here.
          </p>
        )}
      </Paper>
    </Container>
  );
}

export default Search;
