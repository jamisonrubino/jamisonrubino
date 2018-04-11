import React, { Component } from 'react'
// import TravelTracksCarousel from './TravelTracksCarousel'
// import index from './img/travel_tracks_index.jpg'
// import login from './img/travel_tracks_login.jpg'
// import playlist from './img/travel_tracks_playlist.jpg'
// import playlists from './img/travel_tracks_playlists.jpg'
import portfolioData from './../portfolioData'


export default class TravelTracks extends Component {
  constructor(props) {
    super(props)
    this.state = {
      carouselOffset: 0,
      images: [],
      blurbs: [],
      summary: null,
      numSlides: this.props.numSlides
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
      this.setState({images, blurbs, summary, numSlides}, ()=> console.log(this.state.images, imgPath+"1.jpg", this.props.selected, piece, imgPath, piece.imgPath))
    }

    // const imgData = {
    //   dir: 'traveltracks/img',
    //   filetype: 'jpg'
    // }

    // fetch('/traveltracks_img')
    // .then(res=>res.json())
    // .then(img=>console.log(img))
    //
    // fetch('/pf')
    // .then(res=>res.json())
    // .then(img=>console.log(img))
    //
    // fetch('/portfolio/traveltracks/imgs')
    //   .then(res=>{
    //     console.log(res)
    //     return res.json()
    //   })
    //   .then(images=>this.setState({images, numSlides: images.length}))


    // fetch blurbs, console.log if images.length !== blurbs.length

    // const blurbData = {
    //   dir: '/traveltracks/blurbs',
    //   filetype: 'txt'
    // }

    // fetch('/public/portfolio', {method: 'POST', body: JSON.stringify(blurbData)})
    //   .then(res=>res.json())
    //   .then(blurbs=>this.setState({blurbs},
    //      () => this.state.images.length !== this.state.blurbs.length ? console.log("Different number of images and blurbs!", this.state.images, this.state.blurbs) : null))



  render() {
    if (this.props.selected==="traveltracks") {
      // FETCH IMAGES, LOAD INTO IMAGES OBJECT
      // console.log(images)
      let carouselStyle = {
        width: this.state.numSlides*745 + "px",
        marginLeft: this.state.carouselOffset
      }

      const carousel = this.state.images.map((img,i) => {
          return (
            <div className="carousel__item" key={`slide${i}`}>
             <img src={img} />
             <div className="carousel__caption">
               <p>{this.state.blurbs[i]}</p>
             </div>
           </div>
         )
       })

      return (
        <div className="portfolio__item__body">
          <section className="traveltracks">
            <p className="portfolio__p">For my capstone project for Bloc’s Part-Time Web Developer bootcamp, I built TravelTracks, a Ruby-on-Rails-based app that builds you the perfect playlist for your road trip.</p>

            <div className="carousel__wrap">
              <div className="carousel__arrow--left" onClick={() => (this.state.carouselOffset < 0) ? this.setState({carouselOffset: this.state.carouselOffset + 745}) : this.setState({carouselOffset: (this.state.numSlides-1)*-745}) }><span>&lsaquo;</span></div>
              <div className="carousel__arrow--right" onClick={() => (this.state.carouselOffset > (this.state.numSlides-1)*-745) ? this.setState({carouselOffset: this.state.carouselOffset - 745}) : this.setState({carouselOffset: 0}) }><span>&rsaquo;</span></div>
              <div className="carousel" style={carouselStyle}>

                {carousel}
              </div>
            </div>
          </section>
        </div>
      );
    } else {
      return null
    }
  }
}
