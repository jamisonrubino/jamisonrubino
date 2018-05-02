import React, { Component } from 'react';


export default class Contact extends Component {
  render() {
      return (
        <div className="div__services">
          <p>
            I'm <span className="green">proficient</span> in <b>HTML</b>, <b>CSS</b>, <b>Javascript</b>, <b>React</b>, <b>Angular1</b>, <b>Ruby on Rails</b>, <b>PHP</b>, and <b>SQL</b>.
          </p>

          <h3 className="green">Full-stack web development: $30/hour</h3>
          <p>
            I have <span className="yellow">some background</span> in <b>PhotoShop</b>, <b>Gimp</b>, <b>jQuery UI</b>, <b>SCSS</b>, and <b>JavaScript animations</b>. I would be willing to study these for a project if it were necessary.
          </p>
          <h3 className="yellow">If I need to learn the technology: $15/hour</h3>
          <p>
            That said, I'm always learning new skills and looking for worthwhile projects to complete for a reduced rate.
          </p>
          <p>
            <a href="">Contact</a> me for time and compensatory estimates.
          </p>

        </div>
      );

  }
}
