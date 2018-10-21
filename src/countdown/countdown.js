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
      seconds: 0,
      featuredCountdown: null,
      featuredCountdownNextDate: null,
      featuredCountdownNextTime: {"days": null, "hours": null, "minutes": null, "seconds": null},
      countdowns: [
        {
          "_id": 0,
          "name": "Murphy Hassel",
          "startDate": 1301616000,
          "imgUrl": "//dl.dropboxusercontent.com/s/6ecveubyh1h6qyh/doghouse.png?dl=0",
          "display": true
        },
        {
          "_id": 1,
          "name": "Henry Witters",
          "startDate": 1401616000,
          "imgUrl": "//dl.dropboxusercontent.com/s/6ecveubyh1h6qyh/doghouse.png?dl=0",
          "display": true
        },
        {
          "_id": 2,
          "name": "Matthew Hassel",
          "startDate": 1501616000,
          "imgUrl": "//dl.dropboxusercontent.com/s/6ecveubyh1h6qyh/doghouse.png?dl=0",
          "display": true
        }
      ]
    };

    //Bind functions
    this.epochToLocalDateString = this.epochToLocalDateString.bind(this);
    this.epochToLocalDate = this.epochToLocalDate.bind(this);
    this.getRandomCountdown = this.getRandomCountdown.bind(this);
    this.getNearestCountdown = this.getNearestCountdown.bind(this);
    this.epochToLocalDateString = this.epochToLocalDateString.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.setFeaturedCountdownNextDate = this.setFeaturedCountdownNextDate.bind(this);
    this.displayCountdown = this.displayCountdown.bind(this);
  }

  // INPUT: UTC Seconds ; OUTPUT: Local date string adjusted with timezone offset
  // This function would make a great utility
  epochToLocalDateString = (utcSeconds) => {
    const tzOffsetInSeconds = new Date().getTimezoneOffset() * 60;
    const epoch = new Date(0);
    epoch.setUTCSeconds(utcSeconds + tzOffsetInSeconds);
    return (epoch.toLocaleDateString());
  }

    epochToLocalDate = (utcSeconds) => {
    const tzOffsetInSeconds = new Date().getTimezoneOffset() * 60;
    const epoch = new Date(0);
    epoch.setUTCSeconds(utcSeconds + tzOffsetInSeconds);
    return (epoch);
  }

  setFeaturedCountdownNextDate = (countdown) => {
    console.log("In function: %s", "getInitialCountdown");
    // get today in epoch
    // take diff between start and today
    // add diff to startdate of countdown
    // If startdate plus years is greater than now(), begin countdown
    // If startdate plus years is less than now(), add an additional year and begin countdown.

    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();

    const thenDate = new Date(0);
    thenDate.setUTCSeconds(countdown.startDate);
    const thenYear = thenDate.getUTCFullYear();

    const yearDiff = currentYear - thenYear;

    const countdownDate = thenDate.setUTCFullYear(thenDate.getUTCFullYear() + yearDiff) / 1000;
    const countdownDateObj = new Date(0);
    countdownDateObj.setUTCSeconds(countdownDate);

    if (countdownDateObj > currentDate) {
      // Date can be a countdown date; so return it
      console.log("countdown date is greater than currentDate");
    } else {
      console.log("Need to add a year to the countdown");
      countdownDateObj.setUTCFullYear(countdownDateObj.getUTCFullYear() + 1);
      console.log(countdownDateObj);
    }

    const countdownDateSeconds = countdownDateObj.getTime() / 1000;

    this.setState(prevState => ({
      featuredCountdownNextDate: countdownDateSeconds,
      seconds: countdownDateSeconds
    }));

    return (countdownDateSeconds);

  }

  displayCountdown = () => {
    console.log("In function: %s", "displayCountdown");

    if (this.state.featuredCountdownNextDate) {
    } else {
      return null
    }

    // Set the date we are counting down to
    const countdownDate = new Date(0);
    countdownDate.setUTCSeconds(this.state.featuredCountdownNextDate);

    // Get today's date
    const now = new Date().getTime();

    const distance = countdownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    console.log("Days: %s; Hours: %s; Minutes: %s; Seconds: %s", days, hours, minutes, seconds);

    this.setState(prevState => ({
      featuredCountdownNextTime: { "days": days, "hours": hours, "minutes": minutes, "seconds": seconds }
    }));
  }

  getRandomCountdown = (countdowns) => {
    var countdown = countdowns[Math.floor(Math.random()*countdowns.length)]
    return(countdown);
  }

  // Crudly search through countdowns list and return the nearest event
  getNearestCountdown = (countdowns) => {
    var countdown = countdowns[0];
    this.setState(prevState => ({
      featuredCountdown: countdown
    }));
    return(
      countdowns[0]
    );
  }

  handleClick = (id) => {
    var featuredCountdownItem;
    const countdownsItems = this.state.countdowns.map((countdownItem) => {
      if (countdownItem._id === id ) {
        featuredCountdownItem = countdownItem;
        countdownItem.display = countdownItem.display ? false : true;
      } else {
        countdownItem.display = true;
      }
      return (countdownItem);
    });

    this.setState(prevState => ({
      featuredCountdown: featuredCountdownItem,
      countdowns: countdownsItems,
      seconds: 0
    }));
  }


  tick() {
    this.setState(prevState => ({
      seconds: prevState.seconds - 1
    }));
  }

//  componentDidUpdate(prevProps) {
//    console.log("In Function: %s", "componentDidUpdate")
//  }

  componentWillReceiveProps() {
    console.log("componentWillReceiveProps (featured): %o", this.state.featuredCountdown);
  }

  componentWillMount() {

    // The problem here is that you cannot set state and expect it to be immediately avaliable....
    console.log("componentWillMount");
    // set featuredCountdown...
    var feacturedCountdownItem = this.getRandomCountdown(this.state.countdowns);
    console.log(this.state.countdowns);
    const countdownItems = this.state.countdowns.map((countdownItem) => {
      console.log(countdownItem);
      if (countdownItem._id === feacturedCountdownItem._id) {
        countdownItem.display = false;
      } else {
        countdownItem.display = true;
      }
      return (countdownItem);
    });

    // sets and returns countdownNextDateEpochSeconds
    const countdownNextDateEpochSeconds = this.setFeaturedCountdownNextDate(feacturedCountdownItem);

    this.setState(prevState => ({
      countdowns: countdownItems,
      featuredCountdown: feacturedCountdownItem,
      featuredCountdownNextDate: countdownNextDateEpochSeconds,
      seconds: countdownNextDateEpochSeconds
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.displayCountdown(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {

    return(
      <div className="container-fluid xpros-app">
        <div className="row">
          <div className="col-sm-8">
            <Switch>
              <Route exact={true} path="/countdown">
                <CountdownItem
                  key={this.state.featuredCountdown._id}
                  name={this.state.featuredCountdown.name}
                  startDate={this.epochToLocalDateString(this.state.featuredCountdown.startDate)}
                  imgUrl={this.state.featuredCountdown.imgUrl}
                  nextDate={this.epochToLocalDateString(this.state.featuredCountdownNextDate)}
                  nextDays={this.state.featuredCountdownNextTime.days}
                  nextHours={this.state.featuredCountdownNextTime.hours}
                  nextMinutes={this.state.featuredCountdownNextTime.minutes}
                  nextSeconds={this.state.featuredCountdownNextTime.seconds}
                />
              </Route>
              <Route path='/countdown/c/:id' render={({ match }) => (
                  <CountdownItem
                    key={this.state.countdowns[match.params.id]._id}
                    name={this.state.countdowns[match.params.id].name}
                    startDate={this.epochToLocalDateString(this.state.countdowns[match.params.id].startDate)}
                    imgUrl={this.state.countdowns[match.params.id].imgUrl}
                    nextDate={this.epochToLocalDateString(this.state.featuredCountdownNextDate)}
                    nextDays={this.state.featuredCountdownNextTime.days}
                    nextHours={this.state.featuredCountdownNextTime.hours}
                    nextMinutes={this.state.featuredCountdownNextTime.minutes}
                    nextSeconds={this.state.featuredCountdownNextTime.seconds}
                  />
                )}
              />
            </Switch>
          </div>
          <div className="col-sm-4"> 
            <CountdownList {...this.props} {...this.state} onClick={this.handleClick} />
          </div>
        </div>
      </div>
    );
  }
}

export default Countdown;