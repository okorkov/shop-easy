import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import LoginForm from './LoginForm'


export default function Login() {
  const [open, setOpen] = React.useState(false);
  const [loginError, setLoginError] = React.useState(null);

  const handleClickOpen = (e) => {
    setOpen(true);
  };
  const handleClose = (e) => {
    setOpen(false);
  };

  return (
    <div style={{justifyContent: 'center', textAlign: 'center', paddingTop:'5%', paddingBottom:'33%'}}>
      <Button variant="outlined" color="primary" onClick={handleClickOpen} size="large" >
        Log In / Sign Up
      </Button>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open} >
        <LoginForm handleClose={handleClose} loginError={setLoginError}/>
      </Dialog>
      {(loginError) ? <p style={{paddingTop: '2%', color: 'red'}}>{loginError}</p> : null}
    </div>
  );
}
