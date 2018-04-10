import React, { Component } from 'react';

export default class BlocJams extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    if (this.props.selected==="blocjams") {
      return (
        <div className="portfolio__item__body">
          <section className={this.props.selected === "blocjams" ? "blocjams" : ""}>
            <p>Bloc students, to practice Javascript and JQuery, and to introduce AngularJS, build a simple Spotify-style music library with the Buzz engine, consisting of a landing page, album list, and album song list with a functional music player, which plays, pauses and skips tracks, tracking play progress with a working seek bar.</p>

            <p>For lack of song and album work, we loaded 12 iterations of the same album in the Collection page, but a richer body of album templates would load if more were added to the catalog data.</p>

            <p>With album and song data retrieved, we attach event handlers to each song row in the album song list, so play buttons appear on hover, and toggle between play/pause when clicked. When a song plays, the player bar updates with the song’s name, artist, album, total time and time elapsed. The player bar also allows you to seek by dragging the seek thumb to your desired time, just as the volume slider allows you to set the current volume.</p>
          </section>
        </div>
      );
    } else {
      return null
    }
  }
}
