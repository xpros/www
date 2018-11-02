import React, {Component} from 'react';
import { Link } from 'react-router-dom';
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
      countdown.display &&
      <Link key={countdown._id} to={`${this.props.match.url}/c/${countdown._id}`}>
        <li className="list-group-item list-group-item-action list-group-item-dark" onClick={() => this.props.onClick(countdown._id)} >
          {countdown.name}
        </li>
      </Link>
    );
    return (list);
  }

  render() {
    return(
      <div className="card text-white bg-dark card-outline-secondary mb-3 text-center">
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