import React from 'react'
import { Route } from 'react-router-dom'

import LawOverview from '../Pages/LawOverview'
import LawDetails from '../Pages/LawDetails'
import CatOverview from '../Pages/CatOverview'
import CatDetails from '../Pages/CatDetails'
import Profile from '../Pages/Profile'

const PageShell = (props) => {
    return (
      <div className="PageShell">
        <Route path="/" exact       component={LawOverview} />
        <Route path="/Law/:number"   component={LawDetails} />
        <Route path="/Categories"  component={CatOverview} />
        <Route path="/Category/:name"   component={CatDetails} />
        <Route path="/Profile"      component={Profile} />
      </div>
    )
}

export default PageShell
