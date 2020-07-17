import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import Process from './components/Process'
import About from './components/About'

function App() {
  return (
    <BrowserRouter>
      <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/process" component={Process}/>
          <Route exact path="/about" component={About}/>
      </Switch>
    </BrowserRouter>
  );
} 

export default App;
