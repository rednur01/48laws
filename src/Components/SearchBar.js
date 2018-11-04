import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default (props) => {
  const onEvent = ( event ) => {
    if( event.key === "Enter" ) {
      event.target.blur()
    }
  }
  return (
      <div className="SearchBar">
        <input
          type="text"
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.onSearch}
          onKeyUp={onEvent} />
        <FontAwesomeIcon icon="search" color="gray" className="search" />
      </div>
  )
}
