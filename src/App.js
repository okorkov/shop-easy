import React, { Component } from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ShoppingView from './components/ShoppingView';
import Cart from './components/Cart';
import Login from './components/Login'

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Footer />
        </div>
      </Router>
    )
  }
}
