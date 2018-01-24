import React, {Component} from 'react';
import './countdown.css';

class Countdown extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    
  }
  render() {
    
    var imgStyle = {
      display: "block",
      marginLeft: "auto",
      marginRight: "auto",
      maxHeight: "20rem",
      maxWidth: "20rem",
    };
    
    return(
      <div className="card card-outline-secondary mb-3 text-center">
        <img className="card-img-top" alt="Countdown" src={this.props.imgUrl} style={imgStyle}/>
        <div className="card-block">
          <h4 className="card-title">{this.props.name}</h4>
          <p className="card-text">Startdate: {this.props.startdate}</p>
        </div>
      </div>
    );
  }
}

export default Countdown;