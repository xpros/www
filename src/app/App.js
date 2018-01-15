import React, { Component } from 'react';
/* import logo from '.././logo.svg'; */

//Components
/* import Countdown from '../countdown/countdown'; */

import './App.css';
import './xpros.css';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.site = {title: document.domain}
    
    //Bind functions
  }
  render() {
    return (
      <div className="App">
        <nav class="navbar navbar-toggleable-md navbar-inverse bg-inverse">
          <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation"> 
            <span class="navbar-toggler-icon"></span>
          </button>
          <a class="navbar-brand" href="/">{this.site.title}</a>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul class="navbar-nav mr-auto mt-2 mt-md-0">
              {/*<li class="nav-item active">
                <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">About</a>
              </li>*/}
            </ul>
          </div>
        </nav>
        <div className="jumbotron jumbotron-fluid xpros-jumbo">
          <h1 className="display-4"><span>Welcome to {this.site.title}</span></h1>
          <p className="lead"><span>Where geekin' it up is good for the soul.</span></p>
        </div>
      </div>
      /*
      <div className="App">
        <header className="App-header xpros-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title xpros-title">Welcome to {this.site.title}</h1>
        </header>
        <div className="container-fluid">
        </div>
      </div>
      /*
      /*
      <div className="container-fluid">
          <div className="row">
            <div className="col">
              <nav class="navbar fixed-top navbar-inverse bg-inverse">
                <a class="navbar-brand" href="#">Sticky top</a>
              </nav>
            </div>
          </div>
          <div className="row">
            <div className="col">
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-8">
              <div className="row">
                <Countdown name="Murphy Hassel" birthdate="03/04/2017" />
                <Countdown name="Henry Witters" birthdate="01/01/2017" />
              </div>
            </div>
          </div>
        </div>
      </div>
      */
    );
  }
}

export default App;
