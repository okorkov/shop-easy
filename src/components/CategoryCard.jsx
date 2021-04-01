import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { BrowserRouter as Switch, Route, Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});
const capitalize = (s) => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1);
}



export default function CategoryCard(props) {
  const classes = useStyles();
  const data = props.category ||  props.data 
  
  return (
    <Grid item>
      <Card className={classes.root}>
        <CardContent>
          <Typography variant="h5" component="h2" style={{textAlign: 'center', fontWeight: 'bold'}}> 
            {capitalize(data.name)}
          </Typography>
        </CardContent>
        <CardActions style={{justifyContent: 'center'}}>
        <Link to={"/categories/" + data.id}>
          <Button size="large"style={{border: '1px solid blue'}}>Browse Products</Button>
        </ Link>
        </CardActions>
      </Card>
    </Grid>
  );
}
