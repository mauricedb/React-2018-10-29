import React, { Component } from 'react';
import './App.css';

import Counter from './components/Counter'
import Buttons from './components/Buttons'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter />
        <Buttons />
      </div>
    );
  }
}

export default App;
