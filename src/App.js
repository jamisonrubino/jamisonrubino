import React, { Component } from 'react';
// import $ from 'jquery'
import { Route, Link } from 'react-router-dom'
import './App.css';
import Landing from './Components/Landing'
import Portfolio from './Components/portfolio/Portfolio'
import Services from './Components/services/Services'
import Contact from './Components/contact/Contact'
import About from './Components/about/About'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedNavItem: 'home'
    }
    this.setNavItem = this.setNavItem.bind(this)
    this.setNavPortfolio = this.setNavPortfolio.bind(this)
    this.setNavServices = this.setNavServices.bind(this)
    this.setNavContact = this.setNavContact.bind(this)
  }

  componentDidMount() {
    console.log(this.props)
  }

  setNavItem(navItem) {
    this.setState({selectedNavItem: navItem})
  }
  setNavPortfolio() {
    this.setState({selectedNavItem: "portfolio"})
  }
  setNavServices() {
    this.setState({selectedNavItem: "services"})
  }
  setNavContact() {
    this.setState({selectedNavItem: "contact"})
  }



  render() {
    const PortfolioWithProps = props =>
        <Portfolio {...props} updateNav={this.setNavPortfolio} />,
        ServicesWithProps = props =>
            <Services {...props} updateNav={this.setNavServices} />,
        ContactWithProps = props =>
            <Contact {...props} updateNav={this.setNavContact} />

    return (
      <div className="App">
        <header className="header">
          <div className="header__home">
            <h1><Link to="/" className="header__home__link" onClick={()=>this.setState({selectedNavItem: 'home'})}>Jamison Rubino</Link></h1>
            <span className={"header__home__tagline" + (this.state.selectedNavItem === "home" ? "--selected" : "") }>JUNIOR WEB DEVELOPER</span>
          </div>
          <nav>
            <ul>
              <Link to="/portfolio"><li
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
          <Route exact path="/" component={About} />
          <Route path="/portfolio/:piece?" component={PortfolioWithProps} />
          <Route path="/services" component={ServicesWithProps} />
          <Route path="/contact" component={ContactWithProps} />
        </div>
      </div>
    );
  }
}

export default App;
