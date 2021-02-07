import Paper from "@material-ui/core/Paper";

function BookCard(props) {
  return (
    <Paper>
      <div>
        <p>{props.title}</p>
        <img src={props.thumbnail} />
        <p>{props.authors + ""}</p>
        <p>{props.description}</p>
        <a target="_blank" href={props.infoLink} rel="noreferrer">
          View
        </a>
      </div>
    </Paper>
  );
}

export default BookCard;
