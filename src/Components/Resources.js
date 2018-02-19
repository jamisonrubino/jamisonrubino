import React, { Component } from 'react';


class Resources extends Component {
  render() {
    if (this.props.selected==="resources") {
      return (
        <div className="resources">
          <h1>{this.props.selected.slice(0,1).toUpperCase() + this.props.selected.slice(1)}</h1>






        </div>
      );
    } else {
      return null
    }
  }
}

export default Resources;
