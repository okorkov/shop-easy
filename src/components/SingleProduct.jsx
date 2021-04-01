import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    minWidth: '100%',
    maxHeight: 500,
    minHeight: '100%'
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
}));



export default function SingleProduct(props) {
  const classes = useStyles();
  let { path, url } = useRouteMatch();
  let id = url.split('/')
  id = id[id.length - 1]
  let data;
  fetch(`http://127.0.0.1:3000/api/products/${id}`).then(promise => promise.json()).then(object => data = object)
  debugger
  return (
    <Card className={classes.root} >
      <CardHeader 
        title={'props.data.name'}
        subheader={`Updated on: {new Date(props.data.updated_at).toLocaleDateString("en-US")}`}
      />
       <img className="img-fluid product-image" src={'props.data.image'} alt={'props.data.name'} ></img>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {'props.data.description'}
        </Typography>
        {(1 < 5 && 1 > 0) ? 
        <Typography variant="body2" className='quantity-warning'>
        Only {1} left in stock!
      </Typography> : null}
      </CardContent>
      {(1 === 0) ? <p className='quantity-zero'>Out of Stock</p> :
      <CardActions disableSpacing>
        <IconButton aria-label="add to cart" >
          <AddShoppingCartIcon fontSize="large" />
        </IconButton>
        <h5 className="price-tag"><AttachMoneyIcon  />{'props.data.price'}</h5>
      </CardActions>}
    </Card>
  );
}