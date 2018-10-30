import React, { Component } from 'react'
import OverviewTile from '../Components/OverviewTile'
import laws from '../Data/laws.json'

class LawOverview extends Component {
  render() {
    return (
      <div className="LawOverview">
        <ul>
          {
            laws.map( (law) =>
              <li key={law.number}>
                <OverviewTile
                  index={law.number}
                  text={law.title}
                  nav={"/Law/" + law.number} />
              </li>
            )
          }
        </ul>
      </div>
    )
  }
}

export default LawOverview
