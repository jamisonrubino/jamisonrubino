import React, { Component } from 'react';
import './App.css';
import Portfolio from './Components/Portfolio'
import Studies from './Components/Studies'
import Resources from './Components/Resources'
import About from './Components/About'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedNavItem: null
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Jamison Rubino</h1>
          <nav>
            <ul>
              <li
                onClick={()=>this.setState({selectedNavItem: "about"})}
                className={"pull-right " + (this.state.selectedNavItem === 'about' ? 'selected' : '')}>About</li>
              <li
                onClick={()=>this.setState({selectedNavItem: "portfolio"})}
                className={"pull-right " + (this.state.selectedNavItem === 'portfolio' ? 'selected' : '')}>Portfolio</li>
              <li
                onClick={()=>this.setState({selectedNavItem: "studies"})}
                className={"pull-right " + (this.state.selectedNavItem === 'studies' ? 'selected' : '')}>Studies</li>
              <li
                onClick={()=>this.setState({selectedNavItem: "resources"})}
                className={"pull-right " + (this.state.selectedNavItem === 'resources' ? 'selected' : '')}>Resources</li>
            </ul>
          </nav>
        </header>
        <div className="content">
          <About
            selected={this.state.selectedNavItem}
            />
          <Portfolio
            selected={this.state.selectedNavItem}
            />
          <Studies
            selected={this.state.selectedNavItem}
            />
          <Resources
            selected={this.state.selectedNavItem}
            />
        </div>
      </div>
    );
  }
}

export default App;
