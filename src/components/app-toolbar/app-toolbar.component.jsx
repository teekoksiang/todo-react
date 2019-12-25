import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import useStyles from './app-toolbar.styles';
import './app-toolbar.styles.scss';

const AppToolbar = () => {
  const classes = useStyles();

  return (
    <div>
      <AppBar className={classes.appBar} position="static">
        <Toolbar className={classes.toolbar}>
          <IconButton 
            edge="start" 
            color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <IconButton
            aria-label="account of current user"
            color="inherit"
          >
            <AccountCircleIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default AppToolbar;