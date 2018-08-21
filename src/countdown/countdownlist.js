import React, {Component} from 'react';
import './countdown.css'

class CountdownList extends Component {
  constructor(props) {
    super(props);
    console.log("props: %o, this.props");
    console.log("state: %0, this.state");
    
    this.state = {};
    
    //Bind functions
  }
  
  render() {
    return(
      <div className="card card-outline-secondary mb-3 text-center">
        <div className="card-block">
          <h4 className="card-title">{this.props.name}</h4>
          <ul className="list-group">            
          </ul>
        </div>
      </div>
      
    )
  }
  
}

export default CountdownList;