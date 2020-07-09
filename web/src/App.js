import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container } from 'reactstrap';
import './App.css';

import Header from './components/Header/Header';


import Home from './pages/Home/Home';
import About from './pages/About/About'
import Radio from './pages/Radio/Radio'
import Live from './pages/Live/Live'
import Shows from './pages/Shows/Shows'

function App() {
  return (
    <div className="App">
        <Router>
          <div>
          <Header />
          <Container fluid={true}>
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route path='/shows' component={Shows}/>
              <Route path='/live' component={Live}/>
              <Route path='/about' component={About}/>
              <Route path='/radio' component={Radio}/>
            </Switch>
          </Container>
          </div>
          </Router>
    </div>
  );
}

export default App;
