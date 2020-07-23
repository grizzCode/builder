import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import Process from './components/Process'
import About from './components/About'
import Green_Building from './components/Green_Building';
import Pineridge from './components/Pineridge'
import Robertson from './components/Robertson'
import Testimonials from './components/Testimonials'
import CanyonDr from './components/CanyonDr'

function App() {

  return (
    <BrowserRouter>
      <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/process" component={Process}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/green-building" component={Green_Building}/>
          <Route exact path="/pineridge" component={Pineridge}/>
          <Route exact path="/robertson" component={Robertson}/>
          <Route exact path="/testimonials" component={Testimonials}/>
          <Route exact path="/canyon_dr" component={CanyonDr}/>
      </Switch>
    </BrowserRouter>
  );
} 

export default App;
