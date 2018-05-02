import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class Portfolio extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedNavItem: 'home'
    }
    this.updateNav = this.updateNav.bind(this)
    this.setNav = this.setNav.bind(this)
  }

  updateNav() {
    const path = this.props.location.pathname.split('/').filter(x=>x.length > 0)[0]
    this.setState({selectedNavItem: path})
  }

  setNav(navItem) {
    this.setState({selectedNavItem: navItem})
  }

  componentDidMount() {
    if (this.props.location.pathname.length > 1) {
      this.updateNav()
    }
  }

  render() {
      return (
        <header className="header">
          <div className="header__home">
            <h1 className="header__home__link"><Link to="/" onClick={()=>this.setNav('home')}>Jamison Rubino</Link></h1>
            <span className={"header__home__tagline" + (this.state.selectedNavItem === "home" ? "--selected" : "")}>JUNIOR WEB DEVELOPER</span>
          </div>
          <nav>
            <ul>
              <Link to="/portfolio/"><li
                onClick={()=>this.setNav('portfolio')}
                className={(this.state.selectedNavItem === 'portfolio' ? 'selected' : '')}>Portfolio</li></Link>
              <Link to="/services/"><li
                onClick={()=>this.setNav("services")}
                className={(this.state.selectedNavItem === 'services' ? 'selected' : '')}>Services</li></Link>
              <Link to="/contact/"><li
                onClick={()=>this.setNav("contact")}
                className={(this.state.selectedNavItem === 'contact' ? 'selected' : '')}>Contact</li></Link>
            </ul>
          </nav>
        </header>
      );

  }
}
