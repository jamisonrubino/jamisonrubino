import React, { Component } from 'react';


class About extends Component {
  render() {
    if (this.props.selected==="about") {
      return (
        <div className="about">
          <h1>{this.props.selected.slice(0,1).toUpperCase() + this.props.selected.slice(1)}</h1>






        </div>
      );
    } else {
      return null
    }
  }
}

export default About;
