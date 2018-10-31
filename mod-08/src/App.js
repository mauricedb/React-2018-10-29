import React, { Component } from 'react';
import './App.css';

import Fetch from './components/Fetch'
import MovieList from './components/MovieList'

class App extends Component {
  state = {
  }

  componentDidMount() {
    setInterval(() => this.setState({}), 1000)
  }

  render() {
    return (
      <div className="App">
        <Fetch url="/movies.json">
          {(movies) => <MovieList movies={movies} />}
        </Fetch>
      </div>
    );
  }
}

export default App;
