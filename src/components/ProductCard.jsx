import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Grid from '@material-ui/core/Grid';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function ProductCard(props) {
  const classes = useStyles();
  return (
    <Grid item>
      <Card className={classes.root}>
        <CardHeader
          title={props.data.name}
          // {id: 4, name: "Google pixel 6", description: "Google Phone", price: "400.0", category_id: 1, …}
        />
         <img className="img-fluid product-image" src={props.data.image} alt={props.data.name}></img>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.data.description}
          </Typography>
          {(props.data.quantity < 5 && props.data.quantity > 0) ? 
          <Typography variant="body2" className='quantity-warning'>
          Only {props.data.quantity} left in stock!
        </Typography> : null}
        </CardContent>
        {(props.data.quantity === 0) ? <p className='quantity-zero'>Out of Stock</p> :
        <CardActions disableSpacing>
          <IconButton aria-label="add to cart">
            <AddShoppingCartIcon fontSize="large" />
          </IconButton>
          
          <h5 className="price-tag"><AttachMoneyIcon  />{props.data.price}</h5>
        </CardActions>}
      </Card>
    </Grid>
  );
}