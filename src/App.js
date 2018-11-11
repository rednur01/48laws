import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ScrollToTop from './Components/ScrollToTop'
import Toast from './Components/Toast'
import './App.css'

import LawOverview from './Pages/LawOverview'
import LawDetails from './Pages/LawDetails'
import CatOverview from './Pages/CatOverview'
import CatDetails from './Pages/CatDetails'
import Profile from './Pages/Profile'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
library.add( fas, far )


class App extends Component {
  constructor() {
    super()
    this.showToast = this.showToast.bind(this)
    this.fadeToast = this.fadeToast.bind(this)
    this.hideToast = this.hideToast.bind(this)
    this.openModal = this.openModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
    this.state = {
      toast: null,
      toastTimer: null,
      modal: null
    }

    //Set localStorage items
    !localStorage.getItem("categories") &&
      localStorage.setItem("categories", "[]")
    !localStorage.getItem("favoriteLaws") &&
      localStorage.setItem("favoriteLaws","[]")
  }

  showToast( text ) {
    const toast = <Toast text={text} />

    if( this.state.toastTimer ) {
      clearTimeout( this.state.toastTimer )
      document.querySelector(".Toast").classList.remove("fade")
    }

    const timer = setTimeout(this.fadeToast, 2500)
    this.setState({
      toast: toast,
      toastTimer: timer
    })
  }

  fadeToast() {
    const toast = document.querySelector(".Toast")
    toast && toast.classList.add("fade")
    const timer = setTimeout(this.hideToast, 1000)
    this.setState({ toastTimer: timer })
  }

  hideToast() {
    this.setState({
      toast: null,
      toastTimer: null
    })
  }

  openModal( modal ) {
    this.setState({ modal: modal })
  }

  closeModal() {
    this.setState({ modal: null })
  }

  render() {
    return (
      <Router>
      <ScrollToTop>
        <div className="App">
          <Route
            path="/" exact
            component={LawOverview} />

          <Route
            path="/Law/:number"
            render={ props => <LawDetails {...props} showToast={this.showToast} /> } />

          <Route
            path="/Categories"
            render={ props =>
              <CatOverview {...props}
                showToast={this.showToast}
                openModal={this.openModal}
                closeModal={this.closeModal} /> } />

          <Route
            path="/Category/:name"
            render={ props =>
              <CatDetails {...props}
                showToast={this.showToast}
                openModal={this.openModal}
                closeModal={this.closeModal} /> } />

          <Route
            path="/Profile"
            render={ props =>
              <Profile {...props}
                showToast={this.showToast}
                openModal={this.openModal}
                closeModal={this.closeModal} /> } />

          {this.state.toast}
          {this.state.modal}

        </div>
      </ScrollToTop>
      </Router>
    )
  }
}

export default App
