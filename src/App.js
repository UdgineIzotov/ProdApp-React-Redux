import React, { Component } from 'react';
import { BrowserRouter as Router,
         Link  } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';

import { getRoutes } from './services/Router'

class App extends Component {
  render() {
    return (
        <Router>
            {getRoutes()}
        </Router>
                
    );
  }
}

export default App;
