import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import Process from './components/Process'
import About from './components/About'
import Case_Studies from './components/Case_Studies';
import Green_Building from './components/Green_Building';

function App() {
  return (
    <BrowserRouter>
      <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/process" component={Process}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/green-building" component={Green_Building}/>
          <Route exact path="/case-studies" component={Case_Studies}/>
      </Switch>
    </BrowserRouter>
  );
} 

export default App;
