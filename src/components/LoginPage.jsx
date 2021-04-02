import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import LoginForm from './LoginForm'



export default function Login() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div style={{justifyContent: 'center', textAlign: 'center', paddingTop:'20%', paddingBottom:'20%'}}>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Log In / Sign Up
      </Button>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <LoginForm handleClose={handleClose}/>
      </Dialog>
    </div>
  );
}
