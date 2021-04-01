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


  renderProducts () {
    return this.state.productData.map(product => <ProductCard key={product.id} data={product} />)
  }

  render() {
    return (
        <div className="shopping-view">
            <Grid container spacing={8} justify="center" alignItems="stretch" style={{paddingTop: '5%'}}>
            {(this.state.dataLoaded) ? this.renderProducts() : <CircularProgress />}
          </Grid> 
        </div>
    );
  }
}

export default ShoppingView;
