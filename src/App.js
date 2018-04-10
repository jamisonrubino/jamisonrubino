import React, { Component } from 'react';
// import $ from 'jquery'
import './App.css';
import Portfolio from './Components/portfolio/Portfolio'
import Services from './Components/Services'
import Contact from './Components/Contact'
import About from './Components/About'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedNavItem: null
    }
    this.setNavItem = this.setNavItem.bind(this)
  }

  setNavItem(navItem) {
    this.setState({selectedNavItem: navItem})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1><a className="header__h1" onClick={()=>this.setState({selectedNavItem: null})}>Jamison Rubino</a></h1>
          <nav>
            <ul>
              <li
                onClick={()=>this.setNavItem("about")}
                className={(this.state.selectedNavItem === 'about' ? 'selected' : '')}>About</li>
              <li
                onClick={()=>this.setNavItem("portfolio")}
                className={(this.state.selectedNavItem === 'portfolio' ? 'selected' : '')}>Portfolio</li>
              <li
                onClick={()=>this.setNavItem("services")}
                className={(this.state.selectedNavItem === 'services' ? 'selected' : '')}>Services</li>
              <li
                onClick={()=>this.setNavItem("contact")}
                className={(this.state.selectedNavItem === 'contact' ? 'selected' : '')}>Contact</li>
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
          <Services
            selected={this.state.selectedNavItem}
            />
          <Contact
            selected={this.state.selectedNavItem}
            />
        </div>
      </div>
    );
  }
}

export default App;
