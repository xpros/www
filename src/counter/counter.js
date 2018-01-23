import React, {Component} from 'react';
import './counter.css';

class Counter extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
        
    this.state = { count: 0 };
    
    //bind functions
    this._increment = this._increment.bind(this);
    this._decrement = this._decrement.bind(this);
  
  }
  
  _increment() {
    this.setState({
      count: this.state.count + 1
    });
  }
  
  _decrement() {
    this.setState({
      count: this.state.count - 1
    });
  }
  
  render() {
    return(
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this._increment}>Count Up!!</button>
        <button onClick={this._decrement}>Count Down!!</button>
      </div>
    )
  }
}

export default Counter;