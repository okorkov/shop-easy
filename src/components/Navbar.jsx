import React from 'react';
import { Fragment } from "react";
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ShoppingCart from './ShoppingCart';
import ShoppingView from './ShoppingView';
import Cart from './Cart';
import Login from './Login';
import Categories from './Categories';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const link = {
    width: '100px',
    padding: '10px',
    margin: '0 6px 6px',
    background: '#4854b4',
    textDecoration: 'none',
    color: 'white',
  }

  const allTabs = ['/', '/categories', '/login', '/checkout'];

  return (
    <Router>
      <div className={classes.root}>
        <Route
          path="/"
          render={({ location }) => (
            <Fragment>
              <AppBar position="static">
                <Tabs value={location.pathname} onChange={handleChange} aria-label="simple tabs example">
                  <Tab label="Browse"  value="/" component={Link} to={allTabs[0]} style={link}/>
                  <Tab label="Shop by Category"  value="/categories" component={Link} to={allTabs[1]} style={link}/>
                  <Tab label="Sign In"  value="/login" component={Link} to={allTabs[2]} style={link}/>
                  <Tab label={<ShoppingCart />}  value="/checkout" component={Link} to={allTabs[3]} style={link}/>
                </Tabs>
              </AppBar>
              <Switch>
                <Route path={allTabs[0]} exact component={ShoppingView} />
                <Route path={allTabs[1]} component={Categories} />
                <Route path={allTabs[2]} component={Login} />
                <Route path={allTabs[3]} component={Cart} />
              </Switch>
            </Fragment>
          )}
        />
      </div>
    </Router>
  );
}
