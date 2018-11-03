import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'

import HeaderBar from './Components/HeaderBar'
import PageShell from './Components/PageShell'
import FooterBar from './Components/FooterBar'
import ScrollToTop from './Components/ScrollToTop'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
library.add( fas, far )

class App extends Component {
  render() {
    return (
      <Router>
        <ScrollToTop>
          <div className="App">
            <Route component={HeaderBar} />
            <Route component={PageShell}/>
            <Route component={FooterBar} />
          </div>
        </ScrollToTop>
      </Router>
    )
  }
}

export default App
