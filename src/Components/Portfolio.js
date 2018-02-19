import React, { Component } from 'react';
import BlocChat from './portfolio/BlocChat'
import BlocJams from './portfolio/BlocJams'
import TripList from './portfolio/TripList'


class Portfolio extends Component {
  constructor(props) {
    super(props)
    this.state = {
      portfolioPiece: null
    }
  }

  render() {
    if (this.props.selected==="portfolio") {
      return (
        <div className="porfolio">
          <h1>{this.props.selected.slice(0,1).toUpperCase() + this.props.selected.slice(1)}</h1>
          <ul className="ul__portfolio">
            <li onClick={()=>this.setState({portfolioPiece: "blocchat"})}>Bloc Chat</li>
            <li onClick={()=>this.setState({portfolioPiece: "triplist"})}>Triplist</li>
            <li onClick={()=>this.setState({portfolioPiece: "bloccit"})}>Bloccit</li>
          </ul>


          <div>
            <BlocChat
              selected={this.state.portfolioPiece}
              />
            <TripList
              selected={this.state.portfolioPiece}
              />
            <BlocJams
              selected={this.state.portfolioPiece}
              />
          </div>


        </div>
      );
    } else {
      return null
    }
  }
}

export default Portfolio;
