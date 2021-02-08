// import axios from 'axios';
import React, { useState, useEffect } from "react";
import API from "../utils/API";
import Grid from "@material-ui/core/Grid";
import BookCard from "../components/BookCard/index";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import BooksIcon from "@material-ui/icons/LibraryBooksOutlined";
import Button from "@material-ui/core/Button";

function Search() {
  const [search, setSearch] = useState("");
  const [googleBooks, setGoogleBooks] = useState([]);

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

  const handleSavedBooks = (id) => {
    const savedBooks = googleBooks.find((savedBooks) => savedBooks.id === id);

    console.log(savedBooks);
    console.log("Saving...");

    API.saveBook({
      googleId: savedBooks.id,
      title: savedBooks.volumeInfo.title,
      image: savedBooks.volumeInfo.imageLinks.thumbnail,
      author: savedBooks.volumeInfo.authors.join(", "),
      description: savedBooks.volumeInfo.description,
      link: savedBooks.volumeInfo.infoLink,
    })
      .then(() => googleBooks)
      .catch((err) => {
        console.log(err);
      });
  };

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
          style={{
            backgroundColor: "#474747",
            height: 225,
            marginBottom: 35,
          }}
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
            <Grid
              item
              xs={12}
              style={{ display: "flex", justifyContent: "center", marginTop: 25,}}
            >
              <Button
                variant="disabled"
                style={{
                  borderWidth: 1,
                  color: "#5eff45",
                  borderColor: "#5eff45",
                  borderStyle: "solid",
                }}
              >
                Search
              </Button>

              <Button
                variant="contained"
                style={{ marginLeft: 20 }}
                href="/saved"
              >
                Saved
              </Button>
            </Grid>
          </div>
        </Paper>

        <Grid container spacing={7}>
          {googleBooks.map((books) => {
            return (
              <Grid item xs={12} key={books.id}>
                <BookCard
                  title={books.volumeInfo.title}
                  thumbnail={books.volumeInfo.imageLinks.thumbnail}
                  authors={books.volumeInfo.authors + ""}
                  description={books.volumeInfo.description}
                  link={books.volumeInfo.infoLink}
                >
                  <Button
                    onClick={() => handleSavedBooks(books.id)}
                    variant="outlined"
                    style={{
                      marginLeft: 20,
                      marginTop: 20,
                      backgroundColor: "#214d14",
                      borderColor: "white",
                      color: "white",
                    }}
                  >
                    Save
                  </Button>
                </BookCard>
              </Grid>
            );
          })}
        </Grid>

        {googleBooks.length ? (
          <p></p>
        ) : (
          <p style={{ textAlign: "center", color: "white", paddingTop: 20 }}>
            Searched books will appear here.
          </p>
        )}
      </Paper>
    </Container>
  );
}

export default Search;
