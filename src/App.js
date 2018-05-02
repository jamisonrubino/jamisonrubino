import React, { Component } from 'react';
import { Route, Link, withRouter } from 'react-router-dom'
import './App.css';
import Nav from './Components/Nav'
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

  setNavItem(selectedNavItem) {
    this.setState({selectedNavItem})
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
        <Portfolio {...props} updateNav={this.setNavItem} setNavPortfolio={this.setNavPortfolio} />,
        ServicesWithProps = props =>
            <Services {...props} updateNav={this.setNavServices} />,
        ContactWithProps = props =>
            <Contact {...props} updateNav={this.setNavContact} />,
        NavWithRoute = withRouter(props => <Nav {...props} updateNav={this.setNavItem} />)

    return (
      <div className="App">
        <NavWithRoute />
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
