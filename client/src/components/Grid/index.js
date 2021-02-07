import Grid from '@material-ui/core/Grid';

export default function CenteredGrid(props) {

  return (
    <div>
      <Grid container spacing={1}>
        {props.children}
      </Grid>
    </div>
  );
}
