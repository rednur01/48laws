import React from 'react'
import { Link } from 'react-router-dom'

const HeaderBar = (props) => {
  const headers = [
    {
      path: "/",
      header: "The 48 Laws of Power",
      depth: 1
    },
    {
      path: "/Categories",
      header: "Categories",
      depth: 1
    },
    {
      path: "/Profile",
      header: "Profile",
      depth: 1
    },
    {
      path: "/Law",
      header: "Law Details",
      depth: 2,
      parent: "Laws",
      parentPath: "/"
    },
    {
      path: "/Category",
      header: "Category Details",
      depth: 2,
      parent: "Category",
      parentPath: "/Categories"
    }
  ]
  const path = props.location.pathname
  const matches = headers.filter( header => {
    return path.startsWith(header.path)
  })
  const match = matches[1] || matches[0]
  const header = match.header
  const depth = match.depth
  return (
    <div className="HeaderBar">

      <div className="Nav">
        { depth > 1  &&
          <Link to={match.parentPath}>
            {"< " + match.parent}
          </Link> }
      </div>

      <div className="Title">
        {header}
      </div>

      <div className="Action">

      </div>

    </div>
  )
}

export default HeaderBar
