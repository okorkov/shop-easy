import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import { connect } from 'react-redux';
import { signIn, signUp } from '../actions/user';
import { withRouter } from "react-router";

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));


const LoginForm = (props) => {
  const classes = useStyles();

  const [login, setLogin] = React.useState({email: '', password: ''});
  const [signup, setSignup] = React.useState({email: '', password: '', password_confirmation: '', name: ''});

  const BASE_URL = process.env.REACT_APP_BACKEND_BASE_URL

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    props.handleClose(e)
    axios.post(`${BASE_URL}/sessions`, login, {withCredentials: true})
    .then(response => autentications(response)).catch(error => alert(error.message))
  }

  const autentications = (response) => {
    if(response.data.logged_in) {
      props.dispatch(signIn(response))
      props.history.push('/checkout')
    } else {
      return props.loginError('Wrong Email or Password')
    }
  }

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    props.handleClose(e)
    axios.post(`${BASE_URL}/users`, signup, {withCredentials: true})
    .then(response => props.dispatch(signUp(response))).catch(error => alert(error.message))
  }

  const handleLoginInput = (e) => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value
    })
  }

  const handleSignupInput = (e) => {
    setSignup({
      ...signup,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div style={{textAlign: 'center', justifyContent: 'center', paddingTop: '5%'}}>
    <h3>Please Log In</h3>
    <form className={classes.root} noValidate autoComplete="off" onSubmit={(e) => handleLoginSubmit(e)}>
    <TextField required={true} id="email" value={login.email} label="email" name="email"  onChange={(e) => handleLoginInput(e)}/>
    <TextField required={true} id="password" value={login.password} label="password" name="password" type="password" onChange={(e) => handleLoginInput(e)}/>
    <Button autoFocus  color="primary" type="submit" disabled={login.email.length === 0 || login.password.length === 0}>
      Log In
    </Button>
  </form>
  <h3>Or Sign Up</h3>
  <form className={classes.root} noValidate autoComplete="off" onSubmit={(e) => handleSignupSubmit(e)}>
    <TextField id="email-register" value={signup.email} label="email" name="email" onChange={(e) => handleSignupInput(e)} />
    <TextField id="name-register" value={signup.name} label="your name" name="name" onChange={(e) => handleSignupInput(e)}/>
    <TextField id="password-register" value={signup.password} label="password" type="password" name="password" onChange={(e) => handleSignupInput(e)}/>
    <TextField id="password-confirm-register" value={signup.password_confirmation} label="confirm password" type="password" name="password_confirmation" onChange={(e) => handleSignupInput(e)}/>
    <Button autoFocus  color="primary" type="submit" disabled={signup.email.length === 0 || signup.password.length === 0 || signup.password_confirmation.length === 0 || signup.name.length === 0}>
      Sign Up
    </Button>
  </form>
    </div>
  );
}

const mapStateToProps = function(state) {
  return state
}

export default connect(mapStateToProps)(withRouter(LoginForm));



