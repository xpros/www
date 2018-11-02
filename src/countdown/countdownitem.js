import React from 'react';
import './countdown.css'

function CountdownItem(props) {
  var imgStyle = {
      display: "block",
      marginLeft: "auto",
      marginRight: "auto",
      maxHeight: "100%",
      maxWidth: "75%",
  };

  return(
    <div className="card text-center text-white bg-dark">
      <img className="card-img-top" alt="Countdown" src={props.imgUrl} style={imgStyle} />
      <div className="card-header"></div>
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">Start Date: {props.startDate} Next Date: {props.nextDate}</p>
      </div>
      <div className="card-footer text-muted">COUNTDOWN TIMER => Days: {props.nextDays} - Hours: {props.nextHours} - Minutes: {props.nextMinutes} - Seconds: {props.nextSeconds}</div>
    </div>
  );
}

export default CountdownItem;