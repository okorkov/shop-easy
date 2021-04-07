import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import axios from 'axios';
import { connect } from 'react-redux';
import { deleteCartItem } from '../actions/cart'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '36ch',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}));

const handleDelete = (props) => {
  
  axios.delete(`${process.env.REACT_APP_BACKEND_BASE_URL}/api/cart_items/${props.data.id}`, {withCredentials: true})
  .then(props.dispatch(deleteCartItem(props.data)))
}

const CartOverview = (props) => {
  const classes = useStyles();
  return (
    <div style={{padding: '1%'}}>
       <Grid item>
        <List className={classes.root} >
          <ListItem style={{border: '1px solid pink'}}>
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src={props.data.image} />
            </ListItemAvatar>
            <ListItemText
              primary={props.data.name}
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                  >
                  </Typography>
                  {`$${props.data.unit_price}`}
                  <IconButton aria-label="delete" size="small" onClick={() => handleDelete(props)}>
                    <DeleteIcon fontSize="small" />
                  </IconButton>
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Grid>
    </div>
  );
}

const mapStateToProps = function(state) {
  return state
}

export default connect(mapStateToProps)(CartOverview)