import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'

import HeaderBar from './Components/HeaderBar'
import PageShell from './Components/PageShell'
import FooterBar from './Components/FooterBar'

import ScrollToTop from './Components/ScrollToTop'

import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faAngleLeft,
  faAngleRight,
  faChevronRight,
  faStar,
  faCircle,
  faSearch
} from '@fortawesome/free-solid-svg-icons'

library.add(
  faAngleLeft,
  faAngleRight,
  faChevronRight,
  faStar,
  faCircle,
  faSearch
)

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
