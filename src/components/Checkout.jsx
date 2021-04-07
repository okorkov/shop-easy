import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import { connect } from 'react-redux';
import CartItem from './CartItem';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function FullScreenDialog(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const renderCartItem = (cartItems) => {
    return cartItems.map((cartItem => {
      return <CartItem data={cartItem} key={cartItem.id} />
    }))
  }

  return (
    <div >
      <Button variant="contained" color="secondary" size="large" onClick={handleClickOpen}>
        Proceed to Checkout
      </Button>
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition} style={{justifyContent: 'center', textAlign: 'center'}}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Checkout
            </Typography>
          </Toolbar>
        </AppBar>
        <List>
          <Grid container spacing={8} justify="center" alignItems="stretch" direction="row" style={{paddingTop: '5%'}}>
            {renderCartItem(props.user.currentItems)}
          </Grid >
          <Divider />
          
        </List>
      </Dialog>
    </div>
  );
}

const mapStateToProps = function(state) {
  return state
}

export default connect(mapStateToProps)(FullScreenDialog)