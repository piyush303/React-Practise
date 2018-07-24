import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Home } from './components/home/home.component';

class App extends Component {
  constructor(props) {
    super(props);
  }

  getDataFromChild(value) {
    console.log('Parent :- ' + value);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <Home parentMethod={this.getDataFromChild}></Home>
      </div>
    );
  }
}

export default App;
