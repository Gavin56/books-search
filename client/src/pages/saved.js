import { useState, useEffect } from "react";
import API from "../utils/API";
import Grid from "@material-ui/core/Grid";
import BookCard from "../components/BookCard/index";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import BooksIcon from "@material-ui/icons/LibraryBooksOutlined";
import Button from "@material-ui/core/Button";

function Saved() {
  const [displayData, setDisplayData] = useState([]);

  useEffect(() => {
    loadBooks();
  }, []);

  function loadBooks() {
    API.getSavedBooks().then((res) => {
      console.log(res.data);
      setDisplayData(res.data);
    });
  }

  function deleteBook(id) {
    API.deleteBook(id)
      .then((res) => loadBooks())
      .catch((err) => console.log(err));
  }

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
            height: 200,
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
          </div>
        </Paper>

        <Grid container spacing={7}>
          {displayData.map((data) => {
            return (
              <Grid item xs={12} key={data._id}>
                <BookCard
                  title={data.title}
                  thumbnail={data.image}
                  authors={data.author}
                  description={data.description}
                  link={data.link}
                  // handleSave={() => handleSavedBooks(books.id)}
                >
                  <Button
                    onClick={() => deleteBook(data._id)}
                    variant="outlined"
                    style={{
                      marginLeft: 20,
                      marginTop: 20,
                      backgroundColor: "#b80d38",
                      borderColor: "white",
                      color: "white",
                    }}
                  >
                    Delete
                  </Button>
                </BookCard>
                {/* {displayData.length ? (
                <p></p>
              ) : (
                <p
                  style={{
                    textAlign: "center",
                    color: "white",
                    paddingTop: 20,
                  }}
                >
                  Saved books will appear here.
                </p>
              )} */}
              </Grid>
            );
          })}
        </Grid>
      </Paper>
    </Container>
  );
}

export default Saved;
