import React, { Component } from 'react';

class BlocChat extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    if (this.props.selected==="blocchat") {
      return (
        <section>
          <p>Bloc students, to practice JQuery, Angular, Firebase, and Bootstrap, build a single-page chatroom app that allows users to register, visit existing chatrooms, create new chatrooms, and post in them.</p>
          <p>For starters, we needed a Firebase database to store our rooms. From that, we fetch an array of room names and display them as links in our sidebar. To add rooms to the rooms database, we add a button next to the “Bloc Chat” title, which opens a modal dialog box (thanks, Bootstrap!), which triggers a function uploading our text to the rooms database.</p>
          <p>With our rooms set up, we needed to populate them with messages. Heading back to Firebase, we set up our messages database table, each child of which holds four object items: room ID, time, username, and message content. Now, each message submission notes the current room, time, and message content.</p>
          <p>For this to be a proper chatroom app, we needed messages to be associated with usernames, so when the site loads, a modal appears to let the user choose their own username.</p>
          <p>Now users can revisit the app for their messaging needs.</p>
        </section>
      );
    } else {
      return null
    }
  }
}

export default BlocChat;
