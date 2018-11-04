import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default (props) => {
  return (
    <Link to={props.navLink}>
      <div className="OverviewTile">
        <div className="Index">
          {props.index}
        </div>

        <div className="Text">
          {props.text}
        </div>

        <div className="Nav">
          <FontAwesomeIcon icon="angle-right" />
        </div>
      </div>
    </Link>
  )
}
