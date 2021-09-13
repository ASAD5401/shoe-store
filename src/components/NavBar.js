import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {Link} from 'react-router-dom'
import { Home } from './Home';
import Product from './Launch'
import { LaunchItem } from './LaunchItem';
import { Launch } from './Launch';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  content:{
    marginRight:10,

  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

export default function DenseAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{  backgroundColor: 'black',alignItems:'center' }}>
        <Toolbar variant="dense">
          <Typography className={classes.content} variant="h6" color="inherit">
            <Link style={{ textDecoration: 'none', color: 'white' }} to="/" >Home</Link>
          </Typography>
          <Typography variant="h6" color="inherit">
          <Link style={{ textDecoration: 'none', color: 'white' }} to="/products" >Product</Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
