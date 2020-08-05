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
import Contact from './components/Contact'
import Stagecoach from './components/Stagecoach';
import Hitching from './components/HitchingPost';
import Royal from './components/RoyalStreet';
import Thor from './components/Thorjussen';
import Jungfrau from './components/Jungfrau';
import Maple from './components/Maple';

function App() {

  return (
    <BrowserRouter>
      <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/process" component={Process}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/contact_us" component={Contact}/>
          <Route exact path="/green-building" component={Green_Building}/>
          <Route exact path="/pineridge" component={Pineridge}/>
          <Route exact path="/robertson" component={Robertson}/>
          <Route exact path="/testimonials" component={Testimonials}/>
          <Route exact path="/canyon_dr" component={CanyonDr}/>
          <Route exact path="/stagecoach" component={Stagecoach}/>
          <Route exact path="/hitching_post" component={Hitching}/>
          <Route exact path="/sterlingwood" component={Royal}/>
          <Route exact path="/interlaken" component={Jungfrau}/>
          <Route exact path="/meadows" component={Thor}/>
          <Route exact path="/maple" component={Maple}/>
      </Switch>
    </BrowserRouter>
  );
} 

export default App;
