import React, {Component} from 'react';

class Hello extends Component {
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
    return (
      <div>
        <div className="jumbotron jumbotron-fluid xpros-jumbo">
          <h1 className="display-4"><span>Hello World!</span></h1>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col">
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Hello;