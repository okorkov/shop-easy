import React from 'react';
import { connect } from 'react-redux';
import CartItem from './CartItem'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import { withRouter } from "react-router";

function Cart(props) {
 
const renderCartItem = (cartItems) => {
  const data = []
  cartItems.map(item => {

  })
  return cartItems.map((cartItem => {
    return <CartItem data={cartItem} key={cartItem.id} />
  }))
}

const redirectToLogin = () => {
  props.history.push('/login')
}

  return (
    <div className='shopping-view' style={{textAlign: 'center'}} >
      <Typography variant="h2" color="textSecondary" size='18' style={{textAlign: 'center', paddingTop:'3%'}} > 
        Your Cart
      </Typography>
      <Grid container spacing={8} justify="center" alignItems="stretch" direction="row" style={{paddingTop: '5%'}}>
        {renderCartItem(props.user.currentItems)}
      </Grid >
      <Typography variant="h4" color="textSecondary" size='18' style={{textAlign: 'center', paddingTop:'5%', paddingBottom:'2%'}} > 
        Total: $ {(props.user.currentItems.length > 0) ? props.user.currentItems.map(function(obj) {
           return parseFloat(obj.unit_price);
        }).reduce(function(a, b) {
          return a + b;
        }, 0).toFixed(2)
         : <CircularProgress />}
      </Typography>
      {(props.user.logged_in)? <Button color="secondary" size="large" variant='contained'>Proceed to Checkout</Button> :
      <Button color="primary" onClick={redirectToLogin} size="large" variant='contained'>Sign in to proceed</Button>}
      
    </div>
  );
}

const mapStateToProps = function(state) {
  return state
}

export default connect(mapStateToProps)(withRouter(Cart))