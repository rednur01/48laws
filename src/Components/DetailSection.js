import React from 'react'

const DetailSection = (props) => {
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

export default DetailSection
