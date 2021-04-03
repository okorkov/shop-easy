import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import ProductCard from './ProductCard';


export default class CategorizedProducts extends Component {
  state ={
    dataLoaded: false,
    productData: [],
    categoryId: this.productId()
  }

  componentDidMount() {
    fetch(`${process.env.REACT_APP_BACKEND_BASE_URL}/api/categories/${this.state.categoryId}`).then(promise => promise.json()).then(data => this.setState({ dataLoaded: true, productData: data.products}))
  }

  productId() { 
    return this.props.match.url.split('/').slice(this.props.match.url.split('/').length -1, this.props.match.url.split('/').length)[0]
  }

  renderProducts () {
    if (this.state.productData !== []) {
      return this.state.productData.map(product => <ProductCard key={product.id} data={product} />)
    }
  }

  render() {
    return (
        <div className="shopping-view">
            <Grid container spacing={8} justify="center" alignItems="stretch" style={{paddingTop: '5%'}}>
            {(this.state.dataLoaded) ? this.renderProducts() : <div style={{padding: '30%'}}><CircularProgress /></div>}
            {(this.state.productData.length === 0) ? <h1 style={{paddingTop: '5%', paddingBottom: '30%'}}>No Product in This Category</h1> : null}
          </Grid> 
        </div>
    );
  }

}
