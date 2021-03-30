import React, { Component } from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Footer />
      </div>
    )
  }
}
