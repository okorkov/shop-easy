import React from 'react';
import { connect } from 'react-redux';
import CartItem from './CartItem'
import Grid from '@material-ui/core/Grid';


function Cart(props) {
 
const renderCartItem = (cartItems) => {
  return cartItems.map((cartItem => {
    return <CartItem data={cartItem} key={cartItem.id}/>
  }))
}
  return (
    <div className='shopping-view' >
      <Grid container spacing={8} justify="center" alignItems="stretch" style={{paddingTop: '5%'}}></Grid>
        {renderCartItem(props.user.currentItems)}
      <Grid />
    </div>
  );
}

const mapStateToProps = function(state) {
  return state
}

export default connect(mapStateToProps)(Cart)