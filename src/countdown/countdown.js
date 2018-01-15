import React, {Component} from 'react';

class Countdown extends Component {
  constructor(props) {
    super(props);
    
    var d = new Date();
    
    this.state = { date: d.toLocaleDateString() };
  }
  render() {
    return(
      <div>
        Name: {this.props.name} Birthdate: {this.props.birthdate}
      </div>
    )
  }
}

export default Countdown;