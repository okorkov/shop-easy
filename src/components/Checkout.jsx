import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import { connect } from 'react-redux';
import CartItem from './CartItem';
import Grid from '@material-ui/core/Grid';
import UserCard from './UserCard';
import ShippingForm from './ShippingForm';




const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function FullScreenDialog(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const renderCartItem = (cartItems) => {
    return cartItems.map((cartItem => {
      return <CartItem data={cartItem} key={cartItem.id} />
    }))
  }

  const subTotal = props.user.currentItems.map(function(obj) {
    return parseFloat(obj.unit_price);
 }).reduce(function(a, b) {
   return a + b;
 }, 0).toFixed(2)

 const tax = parseInt(subTotal) * 0.095;
 const shipping = 15;
 const total =  (parseFloat(subTotal) + tax + shipping).toFixed(2);

  return (
    <div >
      <Button variant="contained" color="secondary" size="large" onClick={handleClickOpen}>
        Proceed to Checkout
      </Button>
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition} style={{justifyContent: 'center', textAlign: 'center'}}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Checkout
            </Typography>
          </Toolbar>
        </AppBar>
        <List>
          <Grid container spacing={8} justify="center" alignItems="stretch" direction="row" style={{paddingTop: '5%'}}>
            {renderCartItem(props.user.currentItems)}
          </Grid >
          <Divider />
          <Typography variant="h6" color="textSecondary" size='18' style={{textAlign: 'center', paddingTop:'5%'}}> 
        Sub-total: $ {(props.user.currentItems.length > 0) ? subTotal : 0}
      </Typography>
      <Typography variant="h6" color="textSecondary" size='18'>
        Tax (9.5%): $ {tax}
      </Typography>
      <Typography variant="h6" color="textSecondary" size='18'>
       Shipping: $ 15.00
      </Typography>
      <Typography variant="h4" color="textSecondary" size='18'>
        Total Due: $ {total}
      </Typography>
        <UserCard  data={props.user}/>< br />
      <Typography variant="h6" color="textSecondary" size='18'>
        Credit/Debit Card Info: < br />
        <ShippingForm />
      </Typography>
        </List>
      </Dialog>
    </div>
  );
}

const mapStateToProps = function(state) {
  return state
}

export default connect(mapStateToProps)(FullScreenDialog)