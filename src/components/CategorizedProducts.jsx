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
    fetch(`http://127.0.0.1:3000/api/categories/${this.state.categoryId}`).then(promise => promise.json()).then(data => this.setState({ dataLoaded: true, productData: data.products}))
  }

  productId() { 
    return this.props.match.url.split('/').slice(this.props.match.url.split('/').length -1, this.props.match.url.split('/').length)[0]
  }

  renderProducts () {
    return this.state.productData.map(product => <ProductCard key={product.id} data={product} />)
  }

  render() {
    return (
        <div className="shopping-view">
            <Grid container spacing={8} justify="center" alignItems="stretch" style={{paddingTop: '5%'}}>
            {(this.state.dataLoaded) ? this.renderProducts () : <CircularProgress />}
          </Grid> 
        </div>
    );
  }

}
