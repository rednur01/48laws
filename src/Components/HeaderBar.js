import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import paths from '../Data/paths.json'

const HeaderBar = (props) => {
  const currentPath = props.location.pathname

  //"/" always matches
  //Check for a second match first, otherwise default to "/"
  const matches = paths.filter( path => {
    return currentPath.startsWith(path.path)
  })
  const match = matches[1] || matches[0]

  const header = match.header
  const depth = match.depth

  const backNav =
    <Link to={match.parentPath || ""}>
      <FontAwesomeIcon icon="angle-left" /> {match.parent}
    </Link>

  //Favorite icon states
  // eslint-disable-next-line
  const unFavorited =
    <FontAwesomeIcon icon={["far", "star"]} />

  // eslint-disable-next-line
  const favorited =
    <FontAwesomeIcon icon="star" />

  const onFavorite = () => {
    props.showToast( " " )
  }

  return (
    <div className="HeaderBar">

      <div className="Nav">
        { depth > 1  && backNav }
      </div>

      <div className="Title">
        {header}
      </div>

      <div className="Action" onClick={ onFavorite }>
        { header === "Law Details" && unFavorited }
      </div>

    </div>
  )
}

export default HeaderBar
