import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import ProductCard from './ProductCard';
import SearchBar from "material-ui-search-bar";

class ShoppingView extends Component {

  state ={
    dataLoaded: false,
    productData: [],
    originalData: [],
    search: ''
  }

  componentDidMount() {
    fetch(`${process.env.REACT_APP_BACKEND_BASE_URL}/api/products`).then(promise => promise.json()).then(data => this.setState({ dataLoaded: true, productData: data}))
  }


  renderProducts () {
    return this.state.productData.map(product => <ProductCard key={product.id} data={product} />)
  }

  handleChange(e) {
    this.setState({
      ...this.state,
      search: e
    })
  }

  handleSubmitSearch() {
    console.log(this.state.search)
  }

  render() {
    return (
        <div className="shopping-view">
          <div className="search">
            <SearchBar
              value={this.state.search}
              onChange={(e) => this.handleChange(e)}
              onRequestSearch={() => this.handleSubmitSearch()}
              
            />
          </div>
          <Grid container spacing={8} justify="center" alignItems="stretch" style={{paddingTop: '5%'}}>
            {(this.state.dataLoaded) ? this.renderProducts() : <div style={{padding: '20%'}}><div style={{textAlign: 'center'}}><CircularProgress /></div></div>}
          </Grid> 
        </div>
    );
  }
}

export default ShoppingView;
