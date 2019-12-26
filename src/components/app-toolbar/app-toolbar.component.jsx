import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import { selectSearch } from '../../redux/task/task.selector';
import { searchTask } from '../../redux/task/task.action';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import useStyles from './app-toolbar.styles';
import './app-toolbar.styles.scss';

const AppToolbar = ({ searchTask, search, location, history }) => {
  const classes = useStyles();

  const handleSearch = event => {
    if (location.pathname !== '/') {
      history.push('/')
    }
    searchTask(event.target.value);
  };

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
              onChange={handleSearch}
              value={search}
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

const mapStateToProps = createStructuredSelector({
  search: selectSearch 
});

const mapDispatchToProps = dispatch => ({
  searchTask: search => dispatch(searchTask(search))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(AppToolbar));