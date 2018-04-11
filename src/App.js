import React, { Component } from 'react';
// import $ from 'jquery'
import { Route, Link } from 'react-router-dom'
import './App.css';
import Landing from './Components/Landing'
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

  componentDidMount() {
    console.log(this.props)
  }

  setNavItem(navItem) {
    this.setState({selectedNavItem: navItem})
  }



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1><Link to="/" className="header__h1" onClick={()=>this.setState({selectedNavItem: null})}>Jamison Rubino</Link></h1>
          <nav>
            <ul>
              <Link to="/about"><li
                onClick={()=>this.setNavItem("about")}
                className={(this.state.selectedNavItem === 'about' ? 'selected' : '')}>About</li></Link>
              <Link to="/portfolio/"><li
                onClick={()=>this.setNavItem("portfolio")}
                className={(this.state.selectedNavItem === 'portfolio' ? 'selected' : '')}>Portfolio</li></Link>
              <Link to="/services"><li
                onClick={()=>this.setNavItem("services")}
                className={(this.state.selectedNavItem === 'services' ? 'selected' : '')}>Services</li></Link>
              <Link to="/contact"><li
                onClick={()=>this.setNavItem("contact")}
                className={(this.state.selectedNavItem === 'contact' ? 'selected' : '')}>Contact</li></Link>
            </ul>
          </nav>
        </header>
        <div className="content">
          <Route exact path="/" component={Landing} />
          <Route path="/about" component={About} />
          <Route path="/portfolio/:piece?" component={Portfolio} />
          <Route path="/services" component={Services} />
          <Route path="/contact" component={Contact} />
        </div>
      </div>
    );
  }
}

export default App;
