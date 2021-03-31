import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import ProductCard from './ProductCard';
import SingleProduct from './SingleProduct';

class ShoppingView extends Component {

  constructor(props) {
    super(props)
    this.renderProduct = this.renderProduct.bind(this)
}

  state ={
    dataLoaded: false,
    productData: [],
    productId: null
  }

  componentDidMount() {
    fetch('http://127.0.0.1:3000/api/products').then(promise => promise.json()).then(data => this.setState({ dataLoaded: true, productData: data}))
  }

  renderProducts () {
    return this.state.productData.map(product => <ProductCard key={product.id} data={product} renderFunction={this.renderProduct}/>)
  }

  renderProduct (id) {
    this.setState({
      ...this.state,
      productId: id 
    })
  }

  render() {
    return (
      <div className="shopping-view">
        {(this.state.productId) ? 
          <SingleProduct /> :
          <Grid container spacing={8} justify="center" alignItems="stretch" style={{paddingTop: '5%'}}>
          {(this.state.dataLoaded) ? this.renderProducts() : <CircularProgress />}
         </Grid> 
        }
      </div>
    );
  }
}

export default ShoppingView;
