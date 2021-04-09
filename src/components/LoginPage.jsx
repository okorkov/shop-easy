import React, { useState, useEffect } from 'react';
// import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import LoginForm from './LoginForm';


export default function Login() {
  const [open, setOpen] = React.useState(false);
  const [loginError, setLoginError] = React.useState(null);
  const [signUpError, setSignUpError] = React.useState([]);
  const [allowClose, setAllowClose] = React.useState(false);

  const handleClickOpen = (e) => {
    setOpen(true);
  };
  const handleClose = (e) => {
    setOpen(false);
  };

  useEffect(() => {
    if (allowClose === false){
      setAllowClose(true)
      handleClickOpen()
    } 
  });

  return (
    <div style={{justifyContent: 'center', textAlign: 'center', paddingTop:'20%', paddingBottom:'33%'}}>
      <Button variant="outlined" color="primary" onClick={handleClickOpen} size="large" >
        Log In / Sign Up
      </Button>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open} >
        <LoginForm handleClose={handleClose} loginError={setLoginError} signUpError={setSignUpError}/>
      </Dialog>
      {(loginError) ? <p style={{paddingTop: '2%', color: 'red'}}>{loginError}</p> : null}
      {(signUpError.length > 0) ?
        <ul>
          {signUpError.map(error => <li style={{paddingTop: '2%', color: 'red'}}>{error}</li>)}
        </ul> :
        null
      }
    </div>
  );
}
