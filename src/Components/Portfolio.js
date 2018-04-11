import React, { Component } from 'react';
import BlocChat from './portfolio/BlocChat'
import BlocJams from './portfolio/BlocJams'
import TravelTracks from './portfolio/TravelTracks'


export default class Portfolio extends Component {
  constructor(props) {
    super(props)
    this.state = {
      portfolioPiece: null,
      numSlides: null
    }
  }

  render() {
    if (this.props.selected==="portfolio") {
      return (
        <div className="div__porfolio">
          <h1>{this.props.selected.slice(0,1).toUpperCase() + this.props.selected.slice(1)}</h1>
          <ul className="ul__portfolio">
            <li onClick={()=>this.setState({portfolioPiece: "blocchat", numSlides: 3})} className={"portfolio__li--blocchat" + (this.state.portfolioPiece === "blocchat" ? " portfolio__li--selected" : "")}></li>
            <li onClick={()=>this.setState({portfolioPiece: "traveltracks", numSlides: 4})} className={"portfolio__li--traveltracks" + (this.state.portfolioPiece === "traveltracks" ? " portfolio__li--selected" : "")}></li>
            <li onClick={()=>this.setState({portfolioPiece: "blocjams", numSlides: 3})} className={"portfolio__li--blocjams" + (this.state.portfolioPiece === "blocjams" ? " portfolio__li--selected" : "")}></li>
          </ul>

          <div className="portfolio__div__wrap">
            <BlocChat
              selected={this.state.portfolioPiece}
              numSlides={this.state.numSlides}
              />
            <TravelTracks
              selected={this.state.portfolioPiece}
              numSlides={this.state.numSlides}
              />
            <BlocJams
              selected={this.state.portfolioPiece}
              numSlides={this.state.numSlides}
              />
          </div>


        </div>
      );
    } else {
      return null
    }
  }
}
