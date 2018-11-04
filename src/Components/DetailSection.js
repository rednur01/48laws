import React from 'react'

export default (props) => {
  return (
    <div className="DetailSection">
      <div className="Title">
        {props.title}
      </div>
      <hr />
      <div className="Description">
        <ul>
          {
            props.description.map( item => {
              return <li><p>{item}</p></li>
            })
          }
        </ul>
      </div>
    </div>
  )
}
