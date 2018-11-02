import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SearchBar = (props) => {
    return (
        <div className="SearchBar">
          <input
            type="text"
            placeholder={props.placeholder}
            value={props.value}
            onChange={props.onSearch} />
          <FontAwesomeIcon icon="search" color="gray" className="search" />
        </div>
    )
}

export default SearchBar
