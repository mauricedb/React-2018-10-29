import React, { Component } from 'react';

import { BrowserRouter, Route, Link, Switch, Redirect } from 'react-router-dom'

import './App.css';

import Cat from './components/Cat'
import Dog from './components/Dog'
import NotFound from './components/NotFound'

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <>
            <header >
              <Link to="/">Home</Link>
              &nbsp;
              <Link to="/cats">Cats</Link>
              &nbsp;
              <Link to="/dog">Dog</Link>
            </header>
            <Switch>
              <Route path='/cats/:name' exact component={Cat} />
              <Route path='/cats' exact component={Cat} />
              <Route path='/dog' component={Dog} />
              <Route path='/' exact  render={() => <div>We are home</div>} />
              <Route render={() => <Redirect to='/'/>}/>
              // <Route component={NotFound} />
            </Switch>
          </>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
