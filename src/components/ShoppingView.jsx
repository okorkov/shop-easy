import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import ProductCard from './ProductCard';
import SearchBar from "material-ui-search-bar";

class ShoppingView extends Component {

  state ={
    dataLoaded: false,
    productData: [],
    backupData: [],
    search: ''
  }

  componentDidMount() {
    fetch(`${process.env.REACT_APP_BACKEND_BASE_URL}/api/products`).then(promise => promise.json()).then(data => this.setState({ dataLoaded: true, productData: data, backupData: data}))
  }

  renderProducts () {
    return this.state.productData.map(product => <ProductCard key={product.id} data={product} />)
  }

  handleChange(e) {
    this.setState({
      ...this.state,
      search: e,
      productData: this.filterItems()
    })
  }


  filterItems(){
    if(this.state.search.length === 1) {return this.state.backupData}
    return this.state.backupData.filter(product => {
      return (product.name.toLowerCase().indexOf(this.state.search) > -1)
    })
  }

  render() {
    return (
        <div className="shopping-view">
          <div className="search">
            <SearchBar
              value={this.state.search}
              onChange={(e) => this.handleChange(e)}
              // onRequestSearch={() => this.handleSubmitSearch()}
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
