import logo from './logo.svg';
import './App.css';
import React from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import {Home} from './components/Home'
import {LaunchItem} from './components/LaunchItem'
import {Launch} from './components/Launch'

import DenseAppBar from './components/NavBar'
function App() {
  return (
    <div>
      
    <Router>
    <DenseAppBar></DenseAppBar>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/products/:id" component={Launch}></Route>
          <Route exact path="/products" component={LaunchItem}></Route>


      </Switch>
    </Router>
    </div>
  );
}

export default App;
