import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';
import DocumentTitle from 'react-document-title'

//Components
import Home from '../home/home';
import About from '../about/about';
import Hello from '../hello/hello';
//import Hostlist from '../hostlist/hostlist';
//import Counter from '../counter/counter';
import Countdown from '../countdown/countdown';

import './App.css';
import './xpros.css';

class App extends Component {
  constructor(props) {
    super(props);
    console.log("Component Name: %o", this.constructor.name);
    console.log("props: %o", this.props);
    console.log("state: %o", this.state);
    
    this.state = {
      site: {
        title: document.domain, 
        routes: [
          {
            "_id": "0",
            "path": "/",
            "exact": true,
            "component": Home
          },
          {
            "_id": "1",
            "path": "/about",
            "exact": false,
            "component": About
          },
          {
            "_id": "2",
            "path": "/hello",
            "exact": false,
            "component": Hello
          },
          {
            "_id": "3",
            "path": "/countdown",
            "exact": false,
            "component": Countdown
          },
          {
            "_id": "4",
            "path": "/countdown/c/:countdownId",
            "exact": false,
            "component": Countdown
          }
        ]
      }
    };
        
    //Bind functions
    //this.loadData = this.loadData.bind(this);
  }
  
  render() {
    return (
      <Router>
        <div className="App">
          <DocumentTitle title={this.state.site.title}></DocumentTitle>
          <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <a className="navbar-brand" href="/">{this.state.site.title}</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarToggler">
              <ul className="navbar-nav">
                <li className="nav-item"><NavLink className="nav-link" to="/about">about</NavLink></li>
                <li className="nav-item"><NavLink className="nav-link" to="/hello">hello</NavLink></li>
                <li className="nav-item"><NavLink className="nav-link disabled" to="/countdown">countdown</NavLink></li>
              </ul>
            </div>
          </nav>
          <Switch>
            {this.state.site.routes.map(({path, exact, component: C}, index) => (
              <Route key={index}
                path={path}
                render={(props) => <C {...props} />}
                exact={exact}
              />
            ))}
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
