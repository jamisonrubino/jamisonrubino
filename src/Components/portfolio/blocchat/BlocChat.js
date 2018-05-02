import React, { Component } from 'react';
import portfolioData from './../portfolioData'

export default class BlocChat extends Component {
  constructor(props) {
    super(props)
    this.state = {
      carouselOffset: 0,
      images: [],
      blurbs: [],
      summary: "",
      numSlides: 0,
      slideDots: []
    }
  }

  componentDidMount() {
    const piece = this.props.piece,
      imgPath = piece.imgPath,
      summary = piece.summary,
      numSlides = piece.numSlides

    let images = []
    let blurbs = []
    for(let i=1; i<=piece.numSlides; i++) {
      images.push(imgPath + `${i}.jpg`)
      blurbs.push(piece.blurbs[i-1])
    }
    this.setState({images, blurbs, summary, numSlides, slideDots: new Array(numSlides+1).join('0').split('')})
    // console.log(this.state.images, imgPath+"1.jpg", this.props.selected, piece, imgPath, piece.imgPath, portfolioData.portfolioPieces.filter(piece=>piece.slug==="blocchat")[0]))
  }



  render() {
    let carouselStyle = {
      width: this.state.numSlides*745 + "px",
      marginLeft: this.state.carouselOffset
    }

    const carousel = this.state.images.map((img, i) => {
        return (
          <div className="carousel__item" key={`slide${i}`}>
           <img src={img} />
           <div className="carousel__caption">
             <p>{this.state.blurbs[i]}</p>
           </div>
         </div>
       )
     })

     const slideDots = this.state.slideDots.map((dot, i) => {
       return (
         <div onClick={()=>this.setState({carouselOffset: (i*745*-1)})}
          className={"carousel__dot" + (this.state.carouselOffset/745*-1 == i ? " current" : "")}
          key={`dot${i}`}>
         </div>
      )
    })
    console.log("arr:", this.state.slideDots, "slideDots[0]:", slideDots[0], "carousel[0]:", carousel[0])

    if (this.props.selected==="blocchat") {
      return (
        <section className="portfolio__item__wrap">
          <div className="portfolio__item__body">
            <section className="blocchat">
              <p className="portfolio__p">{this.state.summary}</p>

              <div className="carousel__wrap">
                <div className="carousel__arrow--left" onClick={() => (this.state.carouselOffset < 0) ? this.setState({carouselOffset: this.state.carouselOffset + 745}) : this.setState({carouselOffset: (this.state.numSlides-1)*-745}) }><span>&lsaquo;</span></div>
                <div className="carousel__arrow--right" onClick={() => (this.state.carouselOffset > (this.state.numSlides-1)*-745) ? this.setState({carouselOffset: this.state.carouselOffset - 745}) : this.setState({carouselOffset: 0}) }><span>&rsaquo;</span></div>

                <div className="carousel__dots__wrap">
                  <div className="carousel__dots">
                    {slideDots}
                  </div>
                </div>
                <div className="carousel" style={carouselStyle}>
                  {carousel}
                </div>

              </div>
            </section>
          </div>
        </section>
      );
    } else {
      return null
    }
  }
}
