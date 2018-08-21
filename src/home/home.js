import React, {Component} from 'react';

class Home extends Component {
  constructor(props) {
    super(props);
    console.log("props: %o", this.props);
    console.log("state: %o", this.state);
    
    this.state = {
      site: {
        title: document.domain
      }
    }
  }
  render() {    
    return(
      <div>
        <div className="jumbotron jumbotron-fluid xpros-jumbo">
          <h1 className="display-4"><span>Welcome to {this.state.site.title}.</span></h1>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <p className="lead"><span>Where geekin' it up is good for the soul.</span></p>
              <p>This is a work in progress as I have some fun and frustrations with web development (using React).</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;