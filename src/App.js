import React, { Component } from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { BrowserRouter as Router} from "react-router-dom";

export default class App extends Component {
  render() {
    const SECRET = process.env.REACT_APP_SESSION_SECRET
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
