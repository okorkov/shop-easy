import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

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

  const BASE_URL = process.env.REACT_APP_BACKEND_BASE_URL

  const [login, setLogin] = React.useState({email: '', password: ''});
  const [signup, setSignup] = React.useState({email: '', password: '', password_confirmation: '', name: ''});

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    props.handleClose(e)
    fetch(`${BASE_URL}/users/user_auth`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(login)
    }).then(promise => promise.json()).then(response => console.log(response)).catch(error => console.log(error.message))
    
  }

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    props.handleClose(e)
    console.log(signup)
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
    <Button autoFocus  color="primary" type="submit">
      Log In
    </Button>
  </form>
  <h3>Or Sign Up</h3>
  <form className={classes.root} noValidate autoComplete="off" onSubmit={(e) => handleSignupSubmit(e)}>
    <TextField id="email-register" value={signup.email} label="email" name="email" onChange={(e) => handleSignupInput(e)} />
    <TextField id="name-register" value={signup.name} label="your name" name="name" onChange={(e) => handleSignupInput(e)}/>
    <TextField id="password-register" value={signup.password} label="password" type="password" name="password" onChange={(e) => handleSignupInput(e)}/>
    <TextField id="password-confirm-register" value={signup.password_confirmation} label="confirm password" type="password" name="password_confirmation" onChange={(e) => handleSignupInput(e)}/>
    <Button autoFocus  color="primary" type="submit">
      Sign Up
    </Button>
  </form>
    </div>
  );
}

export default LoginForm;



