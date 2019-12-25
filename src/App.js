import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import { Switch, Route } from 'react-router-dom';

import AppToolbar from './components/app-toolbar/app-toolbar.component';
import Home from './pages/home/home.component';
import Event from './pages/event/event.component';
import Setting from './pages/setting/setting.component';
import BottomNav from './components/bottom-nav/bottom-nav.component';

import './App.css';

const App = () => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const customTheme = createMuiTheme({
    palette: {
      type: 'dark',
      primary: {
        main: '#344955'
      },
      secondary: {
        main: '#F9AA33'
      },
      background: {
        default: '#232F34',
        paper: '#344955',
      }
    }
  });

  const lightTheme = createMuiTheme({
    palette: {
      type: 'light',
      primary: {
        main: '#0336FF' //#FFDE03, #FF0266
      },
      secondary: {
        main: '#00d4c0'
      },
    }
  });

  const darkTheme = createMuiTheme({
    palette: {
      type: 'dark',
      primary: {
        main: '#262626'
      },
      secondary: {
        main: '#40c4ff'
      },
      background: {
        default: '#121212',
        paper: '#262626',
      }
    }
  });

  return (
    <MuiThemeProvider theme={darkTheme}>
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

export default App;
