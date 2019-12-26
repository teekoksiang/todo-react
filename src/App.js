import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import { selectCurrentTheme } from './redux/theme/theme.selector';

import AppToolbar from './components/app-toolbar/app-toolbar.component';
import Home from './pages/home/home.component';
import Event from './pages/event/event.component';
import Setting from './pages/setting/setting.component';
import BottomNav from './components/bottom-nav/bottom-nav.component';
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import './App.css';

const App = ({ currentTheme }) => {
  const theme = createMuiTheme(currentTheme)

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <AppToolbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/event' component={Event} />
          <Route exact path='/setting' component={Setting} />
        </Switch>
        <BottomNav />
      </div>
    </MuiThemeProvider>
  );
}

const mapStateToProps = createStructuredSelector({
  currentTheme: selectCurrentTheme
});

export default connect(mapStateToProps)(App);
