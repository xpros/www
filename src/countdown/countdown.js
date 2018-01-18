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
        <img className="countdown-img" src="" alt="Alt Image" />
        <p><span>Name:</span> {this.props.name} <span>Birthdate:</span> {this.props.birthdate}</p>
      </div>
    )
  }
}

export default Countdown;