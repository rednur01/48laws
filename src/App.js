import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'

import HeaderBar from './Components/HeaderBar'
import PageShell from './Components/PageShell'
import FooterBar from './Components/FooterBar'
import ScrollToTop from './Components/ScrollToTop'
import Toast from './Components/Toast'

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
              render={ props => <HeaderBar {...props} showToast={this.showToast} /> } />

            <Route
              render={ props => <PageShell {...props} showToast={this.showToast} /> } />

            { Boolean(this.state.toastText) && < Toast text={this.state.toastText} /> }

            <Route component={FooterBar} />
          </div>
        </ScrollToTop>
      </Router>
    )
  }
}

export default App
