import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'

import HeaderBar from './Components/HeaderBar'
import PageShell from './Components/PageShell'
import FooterBar from './Components/FooterBar'

import LawOverview from './Pages/LawOverview'
import LawDetails from './Pages/LawDetails'
import CatOverview from './Pages/CatOverview'
import CatDetails from './Pages/CatDetails'
import Profile from './Pages/Profile'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" component={HeaderBar} />

          <PageShell>
            <Route path="/" exact       component={LawOverview} />
            <Route path="/Law/:number"   component={LawDetails} />
            <Route path="/Categories"  component={CatOverview} />
            <Route path="/Category/:name"   component={CatDetails} />
            <Route path="/Profile"      component={Profile} />
          </PageShell>

          <Route path="/" component={FooterBar} />
        </div>
      </Router>
    )
  }
}

export default App
