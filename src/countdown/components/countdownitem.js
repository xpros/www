import React from 'react';
import '../countdown.css'

function CountdownItem(props) {
  var imgStyle = {
      display: "block",
      marginLeft: "auto",
      marginRight: "auto",
      maxHeight: "100%",
      maxWidth: "100%",
  };
  
  return(
    <div className="card text-center text-white bg-dark">
      <img className="card-img-top" alt="Countdown" src={props.imgUrl} style={imgStyle} />
      <div className="card-header">Featured</div>
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">Startdate: {props.startdate}</p>
      </div>
      {<div className="card-footer text-muted">{props.nextCountdown}</div>}
    </div>
  );
}

export default CountdownItem;