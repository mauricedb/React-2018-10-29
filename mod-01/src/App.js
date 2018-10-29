import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Greetings from './Greetings';
import Clock from './Clock'
import ChuckNorris from './ChuckNorris'

class App extends Component {

  state = {
    firstName: 'Maurice',
    lastName: 'de Beijer'
  }


  changeFirstName = firstName => this.setState({ firstName })

  render() {

    const kai = "Kai"

    // const vDom =  React.createElement('div', null, 'Hello from createElement',
    //   React.createElement(Greetings)
    // )

    // console.log(vDom)
    // return vDom

    const { firstName, lastName } = this.state;

    return (
      <div id='xxx' className="the-app">

        <Greetings firstName={firstName} lastName={lastName} changeFirstName={this.changeFirstName} />
        <Greetings firstName={kai} />
        <Clock />
        <ChuckNorris />

        <div>Hello from a div</div>
      </div>
    );
  }
}

export default App;


