import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom'

import { Home } from './pages/Home'
import { Detail } from './pages/Detail'
import { NotFound } from './pages/NotFound'
import { Search } from './pages/Search'
import { Contact } from './pages/Contact'
import { RandomMovie } from './pages/RandomMovie'

import './App.css';
import './components/Navbar/Navbar.css';
import { Login } from './pages/Login';

class App extends Component {
  render () {
    return (
      <div className="App">
        <HashRouter>
          <Route exact path="/"component={Home} />
          <Route path='/detail/:movieId' component={Detail} />
          <Route path='/search' component={Search} />
          <Route path='/randomizer' component={RandomMovie} />
          <Route path='/contact' component={Contact} />
          <Route path='/login' component={Login} />
          <Route component={NotFound} />
        </HashRouter>
      </div>
    );
  }
}

export default App;
