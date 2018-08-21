import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
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
          <nav className="navbar navbar-toggleable-md navbar-inverse bg-inverse">
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <a className="navbar-brand" href="/">{this.state.site.title}</a>
            <div className="collapse navbar-collapse" id="navbarToggler">
              <ul className="navbar-nav mr-auto mt-2 mt-md-0">
                <li className="nav-item-active"><Link className="nav-link" to="/about">about</Link></li>
                <li className="nav-item-active"><Link className="nav-link" to="/hello">hello</Link></li>
              </ul>
            </div>
          </nav>
          <Switch>
            {this.state.site.routes.map(({path, exact, component: C}, index) => (
              <Route key={index}
                path={path}
                render={(props) => <C {...this.props} />}
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
