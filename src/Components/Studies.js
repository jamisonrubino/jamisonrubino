import React, { Component } from 'react';


class Studies extends Component {
  render() {
    if (this.props.selected==="studies") {
      return (
        <div className="studies">
          <h1>{this.props.selected.slice(0,1).toUpperCase() + this.props.selected.slice(1)}</h1>
          





        </div>
      );
    } else {
      return null
    }
  }
}

export default Studies;
