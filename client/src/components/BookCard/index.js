import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

function BookCard(props) {
  return (
    <Grid>
      <Paper elevation={4} style={{ backgroundColor: "#292929", padding: 15 }}>
        <div style={{ color: "white" }}>
          <h2 style={{ fontStyle: "italic" }}>{props.title}</h2>
          <p>By {props.authors}</p>
          <img src={props.thumbnail} alt="Book Cover" />
          <p>{props.description}</p>
          <Button
            color="primary"
            variant="outlined"
            target="_blank"
            href={props.link}
            rel="noreferrer"
            style={{marginTop: 10}}
          >
            View
          </Button>
          <Button
            
            variant="outlined"
            style={{marginLeft:20, marginTop: 10}}
          >
            Save
          </Button>
        </div>
      </Paper>
    </Grid>
  );
}

export default BookCard;
