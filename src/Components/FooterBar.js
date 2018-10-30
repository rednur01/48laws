import React from 'react'
import { Link } from 'react-router-dom'

const FooterBar = (props) => {
    return (
      <div className="FooterBar">

        <div className="Left">
          <Link to="/">Laws</Link>
        </div>

        <div className="Center">
          <Link to="/Categories">Categories</Link>
        </div>

        <div className="Right">
          <Link to="/Profile">Profile</Link>
        </div>

      </div>
    )
}

export default FooterBar
