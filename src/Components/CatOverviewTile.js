import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default (props) => {
  return (
    <Link to={props.navLink}>
      <div className="CatOverviewTile">
        <div className="Title">
          {props.title}
        </div>

        <div className="Laws">
          <div>
            {props.laws}
          </div>
        </div>

        <div className="Nav">
          <FontAwesomeIcon icon="angle-right" />
        </div>
      </div>
    </Link>
  )
}
