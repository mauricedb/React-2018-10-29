import React, { Component } from 'react';
import './App.css';

import Counter from './components/Counter'
import Buttons from './components/Buttons'

import store from './store/store'
import { createIncrement } from './store/actions';

import { Provider } from 'react-redux'

store.dispatch(createIncrement(5));
store.dispatch(createIncrement(5));

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <>
            <Counter />
            <Buttons />
          </>
        </Provider>
      </div>
    );
  }
}

export default App;
