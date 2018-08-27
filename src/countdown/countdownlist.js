import React, {Component} from 'react';
import './countdown.css'

class CountdownList extends Component {
  constructor(props) {
    super(props);
    console.log("props: %o", this.props);
    console.log("state: %o", this.state);
    
    this.state = {};
    
    //Bind functions
    this.countdownListItems = this.countdownListItems.bind(this);
  }
  
  countdownListItems = () => {
    const list = this.props.countdowns.map((countdown) => 
      <div className="list-group-item list-group-item-action list-group-item-dark">
        {countdown.name}
      </div>
    );
    return (list);
  }
  
  render() {
    return(
      <div className="card card-outline-secondary mb-3 text-center">
        <div className="card-header">
          Countdowns
        </div>
        <div className="card-block">
          <h4 className="card-title">{this.props.name}</h4>
          <ul className="list-group list-group-flush">
            {this.countdownListItems()}
          </ul>
        </div>
      </div>
      
    )
  }
  
}

export default CountdownList;