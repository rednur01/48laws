import React from 'react'

export default (props) => {
  return (
    <div className="CatHead">
      <div className="Tile">
        <div className="Title">
          {props.title}
        </div>

        {props.description &&
          <div className="Description">
            {props.description}
          </div>
        }
      </div>
    </div>
  )
}
