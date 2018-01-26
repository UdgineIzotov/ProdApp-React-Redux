import React, { Component } from 'react';
import { BrowserRouter as Router,
         Link  } from 'react-router-dom'

import { Provider } from 'react-redux'

import { getRoutes } from './services/Router'
import  Store from './redux/store'


import  './App.scss'

class App extends Component {
  render() {
    return (
        <Provider store={Store} >
            <Router>
                {getRoutes()}
            </Router>
        </Provider>
                
    );
  }
}

export default App;
