import React from 'react'
import { Link } from 'react-router-dom'

const OverviewTile = (props) => {
    return (
      <Link to={props.nav}>
        <div className="OverviewTile">

          <div className="Index">
            {props.index}
          </div>

          <div className="Text">
            {props.text}
          </div>

          <div className="Nav">
            &gt;
          </div>
          
        </div>
      </Link>
    )
}

export default OverviewTile
