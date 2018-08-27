import React from 'react';
import './countdown.css'

function CountdownItem(props) {
  var imgStyle = {
      display: "block",
      marginLeft: "auto",
      marginRight: "auto",
      maxHeight: "100%",
      maxWidth: "100%",
  };
  
  return(
    <div className="card card-outline-secondary mb-3 text-center">
      <img className="card-img-top" alt="Countdown" src={props.imgUrl} style={imgStyle}/>
      <div className="card-block">
        <h4 className="card-title">{props.name}</h4>
        <p className="card-text">Startdate: {props.startdate}</p>
      </div>
    </div>
  );
}

export default CountdownItem;