import * as React from 'react';
import './App.css';

import logo from './logo.svg';

interface IAppProps {
  theFirstName?: string
}

class App extends React.Component<IAppProps> {
  public render() {

    const { theFirstName } = this.props;

    // theFirstName = ''

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React in London</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
          {theFirstName}
        </p>
      </div>
    );
  }
}

export default App;
