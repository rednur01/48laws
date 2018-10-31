import React from 'react'

const SearchBar = (props) => {
    return (
        <div className="SearchBar">
          <input
            type="text"
            placeholder={props.placeholder}
            value={props.value}
            onChange={props.onSearch} />
          <button >
            Search
          </button>
        </div>
    )
}

export default SearchBar
