import React, { Component } from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { BrowserRouter as Router} from "react-router-dom";
import { connect} from 'react-redux';
import { checkLoginStatus } from './actions/user'
import axios from "axios";




class App extends Component {

  checkLoginStatus() {
    const BASE_URL = process.env.REACT_APP_BACKEND_BASE_URL
    axios.get(`${BASE_URL}/users/logged_in`, {withCredentials: true}).then((response) => {
      this.props.dispatch(checkLoginStatus(response))
    })
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

export default connect()(App)