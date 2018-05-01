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
    this.props.updateNav
    this.setState({portfolioPiece: this.props.match.params.piece})
  }


  render() {

    // const portfolioPieces = portfolioData.portfolioPieces.map(piece=>
    //   <{piece.name} numSlides={piece.numSlides} summary={piece.summary} imgPath={piece.imgPath} blurbPath={piece.blurbPath} selectedPiece={} />
    // )
    const blocChatStyle = {
      backgroundImage: `url('${portfolioData.portfolioPieces.filter(piece=>piece.slug==="blocchat")[0].coverImg}')`,
      backgroundSize: 'cover'
    },
    blocJamsStyle = {
      backgroundImage: `url('${portfolioData.portfolioPieces.filter(piece=>piece.slug==="blocjams")[0].coverImg}')`,
      backgroundSize: 'contain'
    },
    travelTracksStyle = {
      backgroundImage: `url('${portfolioData.portfolioPieces.filter(piece=>piece.slug==="traveltracks")[0].coverImg}')`,
      backgroundSize: 'contain'
    },
    BlocChatWithProps = () =>
      <BlocChat
        selected={this.props.match.params.piece}
        numSlides={portfolioData.portfolioPieces.filter(piece=>piece.slug==="blocchat").numSlides}
        piece={portfolioData.portfolioPieces.filter(piece=>piece.slug==="blocchat")[0]}
        />,
    TravelTracksWithProps = () =>
      <TravelTracks
        selected={this.props.match.params.piece}
        numSlides={portfolioData.portfolioPieces.filter(piece=>piece.slug==="traveltracks").numSlides}
        piece={portfolioData.portfolioPieces.filter(piece=>piece.slug==="traveltracks")[0]}
        />,
    BlocJamsWithProps = () =>
      <BlocJams
        selected={this.props.match.params.piece}
        numSlides={portfolioData.portfolioPieces.filter(piece=>piece.slug==="blocjams").numSlides}
        piece={portfolioData.portfolioPieces.filter(piece=>piece.slug==="blocjams")[0]}
        />


    return (
        <div className="div__porfolio">
          <ul className="portfolio__ul">
            <Link to="/portfolio/blocchat"><li className={"portfolio__li--blocchat" + (this.props.match.params.piece === "blocchat" ? " portfolio__li--selected" : "")} style={blocChatStyle}></li></Link>
            <Link to="/portfolio/traveltracks"><li className={"portfolio__li--traveltracks" + (this.props.match.params.piece === "traveltracks" ? " portfolio__li--selected" : "")} style={travelTracksStyle}></li></Link>
            <Link to="/portfolio/blocjams"><li className={"portfolio__li--blocjams" + (this.props.match.params.piece === "blocjams" ? " portfolio__li--selected" : "")} style={blocJamsStyle}></li></Link>
          </ul>

          <section className="portfolio__item__wrap">
            <Route path="/portfolio/blocchat" component={BlocChatWithProps} />
            <Route path="/portfolio/blocjams" component={BlocJamsWithProps} />
            <Route path="/portfolio/traveltracks" component={TravelTracksWithProps} />
          </section>
        </div>
      );

  }
}
