import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default (props) => {
  return (
    <div className="FooterBar">
      <div className="Left">
        <Link to="/">
          <FontAwesomeIcon icon="gavel" size="lg" />
        </Link>
      </div>

      <div className="Center">
        <Link to="/Categories">
          <FontAwesomeIcon icon="th-list" size="lg" />
        </Link>
      </div>

      <div className="Right">
        <Link to="/Profile">
          <FontAwesomeIcon icon="user" size="lg" />
        </Link>
      </div>
    </div>
  )
}
