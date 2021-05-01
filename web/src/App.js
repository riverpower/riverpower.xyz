import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container } from 'reactstrap';
import './App.css';

import Header from './components/Header/Header';

import Home from './pages/Home/Home';
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
            </Switch>
          </Container>
          </div>
          </Router>
    </div>
  );
}

export default App;
