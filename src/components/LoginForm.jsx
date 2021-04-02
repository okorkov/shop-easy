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

  return (
    <>
    <h3>Please Log In</h3>
    <form className={classes.root} noValidate autoComplete="off">
    <TextField id="standard-basic" label="email" name="email"/>
    <TextField id="standard-basic" label="password" name="password" type="password"/>
    <Button autoFocus onClick={() => props.handleClose()} color="primary">
      Log In
    </Button>
  </form>
  <h3>Or Sign Up</h3>
  <form className={classes.root} noValidate autoComplete="off">
    <TextField id="standard-basic" label="email" name="email"/>
    <TextField id="standard-basic" label="your name" name="name"/>
    <TextField id="standard-basic" label="password" type="password" name="password"/>
    <TextField id="standard-basic" label="confirm password" type="password " name="password_confirmation"/>
    <Button autoFocus onClick={() => props.handleClose()} color="primary">
      Sign Up
    </Button>
  </form>
    </>
  );
}

export default LoginForm;
