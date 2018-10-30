import React from 'react'
import laws from '../Data/laws.json'

const LawDetails = (props) => {
  const number = props.match.params.number
  const index = number - 1
  const law = laws[index]
  return (
    <div className="LawDetails">
      <div className="Title">
        {number}. {law.title}
      </div>

      <div className="Sections">
        {law.description}
      </div>
    </div>
  )
}

export default LawDetails
