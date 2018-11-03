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
    this.state = { toastText: ""}
  }

  showToast( text ) {
    this.setState({ toastText: text })
    setTimeout(() => {
      this.setState({ toastText: ""})
    }, 2000)
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
            component={CatOverview} />

          <Route
            path="/Category/:name"
            component={CatDetails} />

          <Route
            path="/Profile"
            component={Profile} />

          {
            Boolean(this.state.toastText) &&
            <Toast text={this.state.toastText} />
          }

        </div>
      </ScrollToTop>
      </Router>
    )
  }
}

export default App
