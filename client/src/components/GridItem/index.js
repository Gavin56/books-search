import Grid from "@material-ui/core/Grid";

function GridItem(props) {
  return (
    <Grid item xs={8}>
      {props.children}
    </Grid>
  );
}

export default GridItem;
