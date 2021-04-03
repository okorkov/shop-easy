import React, { Component } from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { BrowserRouter as Router} from "react-router-dom";
import axios from "axios";


export default class App extends Component {

  checkLoginStatus() {
    const BASE_URL = process.env.REACT_APP_BACKEND_BASE_URL
    axios.get(`${BASE_URL}/users/logged_in`, {withCredentials: true}).then((response) => console.log(response))
  }

  componentDidMount() {
    this.checkLoginStatus()
  }

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
