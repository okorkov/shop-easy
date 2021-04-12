import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import CircularProgress from '@material-ui/core/CircularProgress';
import CategoryCard from './CategoryCard';
import { addToCart } from '../actions/cart';
import { connect } from 'react-redux';



class SingleProduct extends Component {

  state = {
    data: {}
  }

  productId() { 
    return this.props.match.url.split('/').slice(this.props.match.url.split('/').length -1, this.props.match.url.split('/').length)[0]
  }

  componentDidMount() {
    fetch(`${process.env.REACT_APP_BACKEND_BASE_URL}/api/products/${this.productId()}`).then(promise => promise.json()).then(product => this.setState({data: product}))
  }

  render() {
    // debugger
    return (
      <>
      {
        (this.state.data === {}) ?
        <div style={{padding: '30%'}}><CircularProgress /></div> :
        <Card >
          <div className="category" style={{justifyContent: 'center', textAlign: 'center'}}>
          <CardHeader 
            title={this.state.data.name}
            subheader={`Updated on: ${new Date(this.state.data.updated_at).toLocaleDateString("en-US")}`}
          />
          <img className="img-fluid product-image" src={this.state.data.image} alt={this.state.data.name} ></img>
          <CardContent>
            <Typography variant="body1" color="textSecondary" component="p" style={{width: '40%', textAlign: 'center', marginLeft: '30%'}}>
              {this.state.data.description}
            </Typography>
            {(this.state.data.quantity < 5 && this.state.data.quantity > 0) ? 
            <Typography variant="body2" className='quantity-warning'>
            Only {this.state.data.quantity} left in stock!
          </Typography> : null}
          </CardContent>
          <br /> <br /> 
          <h4><strong>More in this category:</strong></h4>
          <CategoryCard data={this.state.data} category={this.state.data.category}/>
          {(this.state.data.quantity <= 0) ? <><br /> <p className='quantity-zero' style={{color: 'red'}}>Sorry, Item is Out of Stock</p> </>:
          <CardActions disableSpacing>
            <IconButton aria-label="add to cart" onClick={() => addToCart({
              ...this.props,
              data: this.state.data
            })}>
              <AddShoppingCartIcon fontSize="large"/>
              Add to Cart
            </IconButton>
            <h5 className="price-tag"><AttachMoneyIcon  />{this.state.data.price}</h5>
          </CardActions>}
          </div>
        </Card>
      }
      </>
    );
  }
}

const mapStateToProps = function(state) {
  return state
}

export default connect(mapStateToProps)(SingleProduct)