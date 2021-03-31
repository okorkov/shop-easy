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
import { NavLink } from 'react-router-dom';
import ShoppingView from './ShoppingView';
import Cart from './Cart';
import Login from './Login';
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

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

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
    padding: '12px',
    margin: '0 6px 6px',
    background: 'blue',
    textDecoration: 'none',
    color: 'white',
  }
  const allTabs = ['/', '/login', '/checkout'];

  return (
    <Router>
      <div className={classes.root}>
        <Route
          path="/"
          render={({ location }) => (
            <Fragment>
              <AppBar position="static">
                <Tabs value={location.pathname} onChange={handleChange} aria-label="simple tabs example">
                  <Tab label="Browse" {...a11yProps(0)} value="/" component={Link} to={allTabs[0]} />
                  <Tab label="Sign In" {...a11yProps(1)} value="/login" component={Link} to={allTabs[1]} />
                  <Tab label={<ShoppingCart />} {...a11yProps(2)} value="/checkout" component={Link} to={allTabs[2]}/>
                </Tabs>
              </AppBar>
              <Switch>
                <Route path={allTabs[1]} component={ShoppingView} />
                <Route path={allTabs[2]} component={Login} />
                <Route path={allTabs[0]} component={Cart} />
              </Switch>
            </Fragment>
          )}
        />
      </div>
    </Router>
  );
}

// return (
//   <Router>
//     <div className={classes.root}>
//       <AppBar position="static">
//         <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
//           <Tab label="Browse" {...a11yProps(0)} />
//           <Tab label="Sign In" {...a11yProps(1)} />
//           <Tab label={<ShoppingCart />} {...a11yProps(2)} />
//         </Tabs>
//       </AppBar>
//       <TabPanel value={value} index={0}>
//       <Route path="/" exact component={ShoppingView}/>
//         Browse and Shop
//       </TabPanel>
//       <TabPanel value={value} index={1}>
//       <Route path="/login" exact component={Login} />
//         Login here
//       </TabPanel>
//       <TabPanel value={value} index={2}>
//       <Route path="/checkout" exact  component={Cart} />
//         Review your Shopping Cart
//       </TabPanel>
//     </div>
//   </Router>
// );