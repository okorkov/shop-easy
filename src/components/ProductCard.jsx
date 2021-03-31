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
    minWidth: 340,
    maxHeight: 500,
    minHeight: 480
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

const desctiptionHandler = (description) => {
  let result = `${description.slice(0,40)}...`
  return result
}



export default function ProductCard(props) {
  const classes = useStyles();

  const handleClick = (e) => {
    props.renderFunction(props.data.id)
  }
  
  return (
    <Grid item>
      <Card className={classes.root} >
        <CardHeader onClick={e => handleClick(e)}
          title={props.data.name}
          subheader={`Updated on: ${new Date(props.data.updated_at).toLocaleDateString("en-US")}`}
        />
         <img className="img-fluid product-image" src={props.data.image} alt={props.data.name} onClick={e => handleClick(e)}></img>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {desctiptionHandler(props.data.description)}
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