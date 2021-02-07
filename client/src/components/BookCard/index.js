import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

function BookCard(props) {

  // const handleSavedBooks = (id) => {
  //   const savedBooks = googleBooks.find((savedBooks) => savedBooks.id === id);

  //   console.log(savedBooks);
  //   API.saveBook({
  //     googleId: savedBooks.id,
  //     title: savedBooks.volumeInfo.title,
  //     image: savedBooks.volumeInfo.imageLinks.thumbnail,
  //     author: savedBooks.volumeInfo.authors.join(", "),
  //     description: savedBooks.volumeInfo.description,
  //     link: savedBooks.volumeInfo.infoLink,
  //   })
  //     .then(() => googleBooks)
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  return (
    <Grid>
      <Paper elevation={4} style={{ backgroundColor: "#292929", padding: 15 }}>
        <div style={{ color: "white" }}>
          <h2 style={{ fontStyle: "italic" }}>{props.title}</h2>
          <p>By {props.authors}</p>

          <Grid container>
            <Grid item xs={12} md={2}>
              <img src={props.thumbnail} alt="Book Cover" />
            </Grid>

            <Grid item xs={12} md={10}>
              <p>{props.description}</p>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <Button
              variant="outlined"
              target="_blank"
              href={props.link}
              rel="noreferrer"
              style={{
                marginTop: 20,
                backgroundColor: "#173a85",
                borderColor: "white",
                color: "white",
              }}
            >
              View
            </Button>
            <Button
              onClick={props.handleSave}
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
          </Grid>
        </div>
      </Paper>
    </Grid>
  );
}

export default BookCard;
