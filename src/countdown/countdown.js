import React, {Component} from 'react';
import CountdownItem from './countdownitem';
import CountdownList from './countdownlist';
import './countdown.css';

class Countdown extends Component {
  constructor(props) {
    super(props);
    console.log("props: %o", this.props);
    console.log("state: %o", this.state);
    
    this.state = {
      countdowns: [
        {
          "_id": 0,
          "name": "Murphy Hassel",
          "startdate": 1301616000,
          "imgUrl": "//dl.dropboxusercontent.com/s/6ecveubyh1h6qyh/doghouse.png?dl=0"
        }
//        },
//        {
//          "_id": 1,
//          "name": "Henry Witters",
//          "startdate": 1301616000,
//          "imgUrl": "//dl.dropboxusercontent.com/s/6ecveubyh1h6qyh/doghouse.png?dl=0"
//        },
//        {
//          "_id": 2,
//          "name": "Matthew Hassel",
//          "startdate": 1301616000,
//          "imgUrl": "//dl.dropboxusercontent.com/s/6ecveubyh1h6qyh/doghouse.png?dl=0"
//        }
      ]
    };
    
    //Bind functions
    this.countdownListItems = this.countdownListItems.bind(this);
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
  
  countdownListItems = () => {
    const list = this.state.countdowns.map((countdown) =>
      <div className="col-sm-8" key={countdown._id}>
        <CountdownItem name={countdown.name} startdate={this.epochToLocalDateString(countdown.startdate)} imgUrl={countdown.imgUrl} />
      </div>
    );
    return (list);
  }
  
  // Crudly search through countdowns list and return the nearest event
  getNearestEvent = (list) => {
    
  }
  
  render() {
    
    var imgStyle = {
      display: "block",
      marginLeft: "auto",
      marginRight: "auto",
      maxHeight: "100%",
      maxWidth: "100%",
    };
    
    return(
      <div className="container-fluid xpros-app">
        <div className="row">
          <div className="col-sm-8">
            <div className="row">
              {this.countdownListItems()}
            </div>
          </div>
          <div className="col-sm-4">
            <CountdownList />
          </div>
        </div>
      </div>
    );
  }
}

export default Countdown;