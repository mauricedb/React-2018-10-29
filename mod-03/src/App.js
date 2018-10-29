import React, { Component } from 'react';
import './App.css';

import Cat from './components/Cat'
import Dog from './components/Dog'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header >
          <a href="#">Cats</a>
          &nbsp;
          <a href="#">Dogs</a>
        </header>
        <Cat />
        <Dog />
      </div>
    );
  }
}

export default App;
