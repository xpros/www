import React, {Component} from 'react';
import './countdown.css';

class Countdown extends Component {
  constructor(props) {
    super(props);
    
    var d = new Date();
    
    this.state = { date: d.toLocaleDateString() };
  }
  render() {
    return(
      <div>
        <img className="countdown-img" src="https://cdn.pixabay.com/photo/2017/01/31/17/13/animal-2025662_960_720.png" alt="Dog House" />
        <p><span>Name:</span> {this.props.name} <span>Birthdate:</span> {this.props.birthdate}</p>
      </div>
    )
  }
}

export default Countdown;