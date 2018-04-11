import React, { Component } from 'react'
import TravelTracksCarousel from './traveltracks/TravelTracksCarousel'
import index from './traveltracks/img/travel_tracks_index.jpg'
import login from './traveltracks/img/travel_tracks_login.jpg'
import playlist from './traveltracks/img/travel_tracks_playlist.jpg'
import playlists from './traveltracks/img/travel_tracks_playlists.jpg'

let fs  = require('fs')


export default class TravelTracks extends Component {
  constructor(props) {
    super(props)
    this.state = {
      carouselOffset: 0
    }
  }

  render() {
    if (this.props.selected==="traveltracks") {
      // FETCH IMAGES, LOAD INTO IMAGES OBJECT
      // console.log(images)
      let carouselStyle = {
        width: this.props.numSlides*745 + "px",
        marginLeft: this.state.carouselOffset
      }

      return (
        <div className="portfolio__item__body">
          <section className="traveltracks">

            <div className="carousel__wrap">
              <div className="carousel__arrow--left" onClick={() => (this.state.carouselOffset < 0) ? this.setState({carouselOffset: this.state.carouselOffset + 745}) : this.setState({carouselOffset: (this.props.numSlides-1)*-745}) }><span>&lsaquo;</span></div>
              <div className="carousel__arrow--right" onClick={() => (this.state.carouselOffset > (this.props.numSlides-1)*-745) ? this.setState({carouselOffset: this.state.carouselOffset - 745}) : this.setState({carouselOffset: 0}) }><span>&rsaquo;</span></div>
              <div className="carousel" style={carouselStyle}>

                <div className="carousel__item">
                  <img src={login} />
                  <div className="carousel__caption">
                    For my capstone project for Bloc’s Part-Time Web Developer bootcamp, I built TravelTracks, a Ruby-on-Rails-based app that builds you the perfect playlist for your road trip.
                  </div>
                </div>
                <div className="carousel__item">
                  <img src={index} />
                  <div className="carousel__caption">
                    To use TravelTracks, you need to authenticate yourself with Spotify, granting TravelTracks the right to create and modify playlists for you.
                  </div>
                </div>
                <div className="carousel__item">
                  <img src={playlist} />
                  <div className="carousel__caption">
                    To create your playlist, enter the length of your road trip, or calculate your travel time by car with Google Maps Directions. Next, choose the source of your playlist’s music: recommendations based on up to three genre choices, recommendations based on an artist, your 300 most-recent saved tracks, or your top 50 most-played tracks for the last 6 months.
                  </div>
                </div>
                <div className="carousel__item">
                  <img src={playlists} />
                  <div className="carousel__caption">
                    You can browse all of your TravelTracks playlists by following “My Playlists” in the navigation bar.
                  </div>
                </div>
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
