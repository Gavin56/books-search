import Paper from "@material-ui/core/Paper";

function BookCard(props) {
  return (
    <Paper elevation={4} style={{backgroundColor:"#292929", padding:15}}>
      <div style={{color:"white"}}>
        <p>{props.title}</p>
        <img src={props.thumbnail} alt="Book Cover"/>
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
