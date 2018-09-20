import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';
import CountdownItem from './countdownitem';
import CountdownList from './countdownlist';
import './countdown.css';

class Countdown extends Component {
  constructor(props) {
    super(props);
    console.log("Component Name: %o", this.constructor.name);
    console.log("props: %o", this.props);
    console.log("state: %o", this.state);
    
    this.state = {
      countdowns: [
        {
          "_id": 0,
          "name": "Murphy Hassel",
          "startdate": 1301616000,
          "imgUrl": "//dl.dropboxusercontent.com/s/6ecveubyh1h6qyh/doghouse.png?dl=0"
        },
        {
          "_id": 1,
          "name": "Henry Witters",
          "startdate": 1301616000,
          "imgUrl": "//dl.dropboxusercontent.com/s/6ecveubyh1h6qyh/doghouse.png?dl=0"
        },
        {
          "_id": 2,
          "name": "Matthew Hassel",
          "startdate": 1301616000,
          "imgUrl": "//dl.dropboxusercontent.com/s/6ecveubyh1h6qyh/doghouse.png?dl=0"
        }
      ]
    };
    
    //Bind functions
    this.featuredCountdown = this.featuredCountdown.bind(this);
    this.getRandomCountdown = this.getRandomCountdown.bind(this);
    this.getNearestCountdown = this.getNearestCountdown.bind(this);
    this.epochToLocalDateString = this.epochToLocalDateString.bind(this);
  }
  
  // INPUT: UTC Seconds ; OUTPUT: Local date string adjusted with timezone offset
  // This function would make a great utility
  epochToLocalDateString = (utcSeconds) => {
    const tzOffsetInSeconds = new Date().getTimezoneOffset() * 60;
    const epoch = new Date(0);
    epoch.setUTCSeconds(utcSeconds + tzOffsetInSeconds);
    return (epoch.toLocaleDateString());
  }
  
  featuredCountdown = (countdown) => {
    return(
      <CountdownItem key={countdown._id} name={countdown.name} startdate={this.epochToLocalDateString(countdown.startdate)} imgUrl={countdown.imgUrl} />
    );
  }
  
  getRandomCountdown = (countdowns) => {
    return(
      countdowns[Math.floor(Math.random()*countdowns.length)]
    );
  }
    
  // Crudly search through countdowns list and return the nearest event
  getNearestCountdown = (countdowns) => {
    return(
      countdowns[0]
    );    
  }
  
  render() {
    return(
      <div className="container-fluid xpros-app">
        <div className="row">
          <div className="col-sm-8">
            <Switch>
              <Route exact={true} path='/countdown'>{this.featuredCountdown(this.getRandomCountdown(this.state.countdowns))}</Route>
              <Route path='/countdown/c/:id' render={({ match }) => (
                  <div>
                    {this.featuredCountdown(this.state.countdowns[match.params.id])}
                  </div>                  
                )}  />
            </Switch>
            {/* this.featuredCountdown(this.getRandomCountdown(this.state.countdowns)) */}
          </div>
          <div className="col-sm-4">
            <CountdownList {...this.props} {...this.state} />
          </div>
        </div>
      </div>
    );
  }
}

export default Countdown;