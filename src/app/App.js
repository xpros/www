import React, { Component } from 'react';
/* import logo from '.././logo.svg'; */

//Components
import Counter from '../counter/counter';

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
        <nav className="navbar navbar-toggleable-md navbar-inverse bg-inverse">
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation"> 
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand" href="/">{this.site.title}</a>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav mr-auto mt-2 mt-md-0">
              {/*<li className="nav-item active">
                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li>*/}
            </ul>
          </div>
        </nav>
        <div className="jumbotron jumbotron-fluid xpros-jumbo">
          <h1 className="display-4"><span>Welcome to {this.site.title}</span></h1>
          <p className="lead"><span>Where geekin' it up is good for the soul.</span></p>
        </div>
        <p>This is a work in progress as I have some fun and frustrations with web development (using React).</p>
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <Counter name="Murphy Hassel" startdate="03/04/2017" />
            </div>
            <div className="col">
              <Counter name="Henry Witters" startdate="01/01/2017" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
