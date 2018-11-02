import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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

  const backNav =
    <Link to={match.parentPath}>
      <FontAwesomeIcon icon="angle-left" /> {match.parent}
    </Link>

  //Favorite icon states
  // eslint-disable-next-line
  const unFavorited =
    <FontAwesomeIcon icon={["far", "star"]} />

  // eslint-disable-next-line
  const favorited =
    <FontAwesomeIcon icon="star" />


  return (
    <div className="HeaderBar">

      <div className="Nav">
        { depth > 1  && backNav }
      </div>

      <div className="Title">
        {header}
      </div>

      <div className="Action">
        {header==="Law Details" && unFavorited}
      </div>

    </div>
  )
}

export default HeaderBar
