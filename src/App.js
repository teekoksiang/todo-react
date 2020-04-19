import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCurrentUser } from './redux/user/user.selector';
import { checkUserSession } from './redux/user/user.action';
import { selectCurrentTheme } from './redux/theme/theme.selector';

import AppToolbar from './components/app-toolbar/app-toolbar.component';
import BottomNav from './components/bottom-nav/bottom-nav.component';
import Home from './pages/home/home.component';
import Event from './pages/event/event.component';
import Setting from './pages/setting/setting.component';
import Task from './pages/task/task.component';
import Login from './pages/login/login.component';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import { MuiThemeProviderL, createMuiThemeL } from './material-ui/styles';
import './App.css';

const ProtectedRoute = ({ isLoggedIn, ...props }) =>
  isLoggedIn ? <Route {...props} /> : <Redirect to="/login" />;

const App = ({ currentTheme, currentUser, checkUserSession }) => {
  const theme = createMuiThemeL(currentTheme);
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <MuiThemeProviderL theme={theme}>
        <CssBaseline />
        <div className="App">
          <AppToolbar />
          <Switch>
            <ProtectedRoute
              isLoggedIn={currentUser}
              exact
              path="/"
              component={Home}
            />
            <ProtectedRoute
              isLoggedIn={currentUser}
              exact
              path="/event"
              component={Event}
            />
            <ProtectedRoute
              isLoggedIn={currentUser}
              exact
              path="/setting"
              component={Setting}
            />
            <ProtectedRoute
              isLoggedIn={currentUser}
              exact
              path="/task/:id"
              component={Task}
            />
            <Route exact path="/login" component={Login} />
          </Switch>
          <BottomNav />
        </div>
      </MuiThemeProviderL>
    </MuiPickersUtilsProvider>
  );
};

const mapStateToProps = createStructuredSelector({
  currentTheme: selectCurrentTheme,
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
