import React, { Component } from 'react';
import { withRouter, Route, Link } from 'react-router-dom'
import portfolioData from './portfolioData'
import BlocChat from './blocchat/BlocChat'
import BlocJams from './blocjams/BlocJams'
import TravelTracks from './traveltracks/TravelTracks'


export default class Portfolio extends Component {
  constructor(props) {
    super(props)
    this.state = {
      portfolioPiece: null
    }
  }

  componentDidMount() {
    this.setState({portfolioPiece: this.props.match.params.piece})
  }

  portfolioClickHandler(piece) {
    this.setState({portfolioPiece: piece})
  }

  render() {

    // const portfolioPieces = portfolioData.portfolioPieces.map(piece=>
    //   <{piece.name} numSlides={piece.numSlides} summary={piece.summary} imgPath={piece.imgPath} blurbPath={piece.blurbPath} selectedPiece={} />
    // )
    const blocChatStyle = {
      backgroundImage: `url('${portfolioData.portfolioPieces.filter(piece=>piece.slug==="blocchat")[0].coverImg}')`,
      backgroundSize: 'cover'
    }

    const blocJamsStyle = {
      backgroundImage: `url('${portfolioData.portfolioPieces.filter(piece=>piece.slug==="blocjams")[0].coverImg}')`,
      backgroundSize: 'contain'
    }

    const travelTracksStyle = {
      backgroundImage: `url('${portfolioData.portfolioPieces.filter(piece=>piece.slug==="traveltracks")[0].coverImg}')`, backgroundSize: 'contain'
    }

    return (
        <div className="div__porfolio">
          <h1>Portfolio</h1>
          <ul className="ul__portfolio">
            <Link to="/portfolio/blocchat"><li className={"portfolio__li--blocchat" + (this.props.match.params.piece === "blocchat" ? " portfolio__li--selected" : "")} style={blocChatStyle}></li></Link>
            <Link to="/portfolio/traveltracks"><li className={"portfolio__li--traveltracks" + (this.props.match.params.piece === "traveltracks" ? " portfolio__li--selected" : "")} style={travelTracksStyle}></li></Link>
            <Link to="/portfolio/blocjams"><li className={"portfolio__li--blocjams" + (this.props.match.params.piece === "blocjams" ? " portfolio__li--selected" : "")} style={blocJamsStyle}></li></Link>
          </ul>

          <div className="portfolio__div__wrap">
            <BlocChat
              selected={this.props.match.params.piece}
              numSlides={portfolioData.portfolioPieces.filter(obj=>obj.name==="BlocChat").numSlides}
              piece={portfolioData.portfolioPieces.filter(piece=>piece.slug==="blocchat")[0]}
              />
            <TravelTracks
              selected={this.props.match.params.piece}
              numSlides={portfolioData.portfolioPieces.filter(obj=>obj.name==="TravelTracks").numSlides}
              piece={portfolioData.portfolioPieces.filter(piece=>piece.slug==="traveltracks")[0]}
              />
            <BlocJams
              selected={this.props.match.params.piece}
              numSlides={portfolioData.portfolioPieces.filter(obj=>obj.name==="BlocJams").numSlides}
              piece={portfolioData.portfolioPieces.filter(piece=>piece.slug==="blocjams")[0]}
              />
          </div>

        </div>
      );

  }
}
