import React from 'react';
import TextField from '@material-ui/core/TextField';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
 
export default class PaymentForm extends React.Component {
  state = {
    cvc: '',
    expiry: '',
    focus: '',
    name: '',
    number: '',
  };
 
  handleInputFocus = (e) => {
    this.setState({ focus: e.target.name });
  }
  
  handleInputChange = (e) => {
    const { name, value } = e.target;
    
    this.setState({ [name]: value });
  }
  
  render() {
    return (
      <div id="PaymentForm">
        <Cards
          cvc={this.state.cvc}
          expiry={this.state.expiry}
          focused={this.state.focus}
          name={this.state.name}
          number={this.state.number}
        />
        <form>
        	<TextField
            style={{ margin: 8 }}
            type="number"
            name="number"
            placeholder="Card Number"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />
          <TextField
            style={{ margin: 8 }}
            type="tel"
            name="name"
            placeholder="Name on Credit Card"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />
           <TextField
            style={{ margin: 8 }}
            type="number"
            name="expiry"
            placeholder="Expiration"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          /> <br /> <br />
        </form>
      </div>
    );
  }
}