import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import CategoryCard from './CategoryCard'



export default class Categories extends Component {
  
  state ={
    dataLoaded: false,
    categories: []
  }

  componentDidMount() {
    fetch(`${process.env.REACT_APP_BACKEND_BASE_URL}/api/categories`).then(promise => promise.json()).then(data => this.setState({ dataLoaded: true, categories: data}))
  }

  renderCategories() {
    return this.state.categories.map(category => <CategoryCard key={category.id} data={category}/>)
  }



  render() {
    return (
      <div className="shopping-view">
        <Grid container spacing={8} justify="center" alignItems="center" style={{paddingTop: '5%'}}>
          {(this.state.dataLoaded) ? this.renderCategories() : <div style={{padding: '20%'}}><h3>Connecting to heroku server, usually it takes about 10-15 seconds, please wait....</h3><div style={{textAlign: 'center'}}><CircularProgress /></div></div>}
        </Grid>
      </div>
    );
  }
}

