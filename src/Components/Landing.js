import React, { Component } from 'react';


class Home extends Component {
  render() {
    if (this.props.selected==="home") {
      return (
        <div className="home">
          <h1>Home</h1>






        </div>
      );
    } else {
      return null
    }
  }
}

export default Home;
