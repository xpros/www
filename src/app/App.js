import React, { Component } from 'react';
/* import logo from '.././logo.svg'; */

//Components
import Counter from '../counter/counter';
import Countdown from '../countdown/countdown';

import './App.css';
import './xpros.css';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      site: {
        title: document.domain
      },
      countdowns: [
        {"_id": "0", "name": "Murphy Hassel", startdate: "03/04/2017", "imgUrl": "//dl.dropboxusercontent.com/s/6ecveubyh1h6qyh/doghouse.png?dl=0"},
        {"_id": "1", "name": "Henry Witters", startdate: "04/01/2011", "imgUrl": "//dl.dropboxusercontent.com/s/6ecveubyh1h6qyh/doghouse.png?dl=0"},
        {"_id": "2", "name": "Matthew Hassel", startdate: "04/01/2011", "imgUrl": "//dl.dropboxusercontent.com/s/6ecveubyh1h6qyh/doghouse.png?dl=0"},
    ]};
        
    //Bind functions
    //this.loadData = this.loadData.bind(this);
    this.countdownList = this.countdownList.bind(this);
    
  }
  
/*  loadData = () => {
    var self = this;
    http.getCountdowns().then(data => {
      self.setState({countdowns: data})
    }, err => {
      
    });
  }*/
  
  countdownList = () => {
    const list = this.state.countdowns.map((countdown) =>
      <div className="col-sm-4" key={countdown._id}>
        <Countdown name={countdown.name} startdate={countdown.startdate} imgUrl={countdown.imgUrl} />
      </div>
    );
    return (list);
  }
  
  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-toggleable-md navbar-inverse bg-inverse">
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation"> 
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand" href="/">{this.state.site.title}</a>
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
          <h1 className="display-4"><span>Welcome to {this.state.site.title}</span></h1>
          <p className="lead"><span>Where geekin' it up is good for the soul.</span></p>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <p>This is a work in progress as I have some fun and frustrations with web development (using React).</p>
            </div>
          </div>
        </div>
        <div className="container-fluid xpros-app">
          <div className="row">
            <div className="col">
              <Counter />
            </div>
            <div className="col">
              <Counter />
            </div>
          </div>
        </div>
        <div className="container-fluid xpros-app">
          <div className="row">
            {this.countdownList()}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
