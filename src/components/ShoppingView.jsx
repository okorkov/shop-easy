import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import ProductCard from './ProductCard';

class ShoppingView extends Component {

  state ={
    dataLoaded: false,
    productData: []
  }

  componentDidMount() {
    fetch('http://127.0.0.1:3000/api/products').then(promise => promise.json()).then(data => this.setState({ dataLoaded: true, productData: data}))
  }

  render() {
    return (
      <div className="shopping-view">
        <Grid container spacing={10} justify="center" alignItems="center" style={{paddingTop: '5%'}}>
          <Grid item xs={12} sm={3}>
          {(this.state.dataLoaded) ? <ProductCard /> : <CircularProgress />}
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default ShoppingView;
