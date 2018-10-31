import React from 'react'

const DetailHead = (props) => {
    return (
        <div className="DetailHead">
          <div className="Tile">
            <div className="Title">
              {props.number}. {props.title}
            </div>

            <div className="Description">
              {props.description}
            </div>
          </div>
        </div>
    )
}

export default DetailHead
