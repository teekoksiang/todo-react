import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import { selectSearch } from '../../redux/task/task.selector';
import { searchTask } from '../../redux/task/task.action';
import { signOutStart } from '../../redux/user/user.action';
import { selectCurrentUser } from '../../redux/user/user.selector';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { toolbarStyles } from '../../material-ui/styles';

const AppToolbar = ({
  searchTask,
  search,
  location,
  history,
  signOutStart,
}) => {
  const classes = toolbarStyles();

  const handleSearch = (event) => {
    if (location.pathname !== '/') {
      history.push('/');
    }
    searchTask(event.target.value);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const signOutStartAndClose = () => {
    setAnchorEl(null);
    signOutStart();
  };

  return (
    <div>
      <AppBar className={classes.appBar} position="static">
        <Toolbar className={classes.toolbar}>
          <IconButton edge="start" color="inherit" aria-label="menu">
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
              onChange={handleSearch}
              value={search}
            />
          </div>
          <IconButton
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
            aria-label="account of current user"
            color="inherit"
          >
            <AccountCircleIcon />
          </IconButton>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={signOutStartAndClose}>Logout</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  search: selectSearch,
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  searchTask: (search) => dispatch(searchTask(search)),
  signOutStart: () => dispatch(signOutStart()),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(AppToolbar)
);
