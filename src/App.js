import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './xpros.css';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.site = {title: "xpros.github.io"};
  }
  render() {
    return (
      <div className="App">
        <header className="App-header xpros-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title xpros-title">Welcome to {this.site.title}</h1>
        </header>
      </div>
    );
  }
}

export default App;
