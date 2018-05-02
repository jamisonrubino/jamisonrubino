import React, { Component } from 'react';


export default class Contact extends Component {
  render() {
    if (this.props.selected==="contact") {
      return (
        <div className="div__contact">
          <h1>{this.props.selected.slice(0,1).toUpperCase() + this.props.selected.slice(1)}</h1>






        </div>
      );
    } else {
      return null
    }
  }
}
