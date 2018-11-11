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
          className={props.value ? "searching" : undefined}
          type="text"
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.onSearch}
          onKeyUp={onEvent} />

        <button
          className={props.value ? "searching" : undefined}
          onClick={props.clearSearch} >
          Cancel
        </button>

        <FontAwesomeIcon icon="search" color="gray" className="search" />
      </div>
  )
}
