import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/header/header.component';
import Home from './pages/home/home.component';

import BottomNav from './components/bottom-nav/bottom-nav.component';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>
        <BottomNav />
      </div>
    );
  }
}

export default App;
