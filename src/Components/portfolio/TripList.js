import React, { Component } from 'react';

class TripList extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    if (this.props.selected==="triplist") {
      return (
        <section>
          <p>For my capstone project for Bloc’s Part-Time Web Developer bootcamp, I built Triplist, a Ruby-on-Rails-based app that builds you the perfect playlist for your road trip.</p>
          <p>To use Triplist, you need to authenticate yourself with Spotify, granting Triplist the right to create and modify playlists for you.</p>
          <p>To create your playlist, enter the length of your road trip, or calculate your travel time by car with Google Maps Directions. Next, choose the source of your playlist’s music: recommendations based on up to three genre choices, recommendations based on an artist, your 300 most-recent saved tracks, or your top 50 most-played tracks for the last 6 months.</p>
          <p>Enjoy your playlist! You can browse songs with a built-in Spotify widget, and play the song in your Spotify application by pressing play.</p>
          <p>You can browse all of your Triplist playlists by following “My Playlists” in the navigation bar.</p>
        </section>
      );
    } else {
      return null
    }
  }
}

export default TripList;
