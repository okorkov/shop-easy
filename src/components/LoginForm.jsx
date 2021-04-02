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
    <div style={{textAlign: 'center', justifyContent: 'center', paddingTop: '5%'}}>
    <h3>Please Log In</h3>
    <form className={classes.root} noValidate autoComplete="on" onSubmit={(e) => props.handleClose(e)}>
    <TextField required={true} id="email" label="email" name="email" autoComplete="email" />
    <TextField required={true} id="password" label="password" name="password" type="password" autoComplete="current-password"/>
    <Button autoFocus  color="primary" type="submit">
      Log In
    </Button>
  </form>
  <h3>Or Sign Up</h3>
  <form className={classes.root} noValidate autoComplete="off">
    <TextField id="email-register" label="email" name="email" autoComplete="email"/>
    <TextField id="name-register" label="your name" name="name"/>
    <TextField id="password-register" label="password" type="password" name="password" autoComplete="new-password"/>
    <TextField id="password-confirm-register" label="confirm password" type="password" name="password_confirmation" autoComplete="new-password"/>
    <Button autoFocus  color="primary">
      Sign Up
    </Button>
  </form>
    </div>
  );
}

export default LoginForm;
