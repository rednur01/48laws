import React from 'react'
import DetailHead from '../Components/DetailHead'
import DetailSection from '../Components/DetailSection'
import laws from '../Data/laws.json'


const LawDetails = (props) => {
  const number = props.match.params.number
  const index = number - 1
  const law = laws[index]
  return (
    <div className="LawDetails">
      <DetailHead
        number={law.number}
        title={law.title}
        description={law.description} />
      <DetailSection
        title="Keys To Power"
        description={law.keysToPower} />
      <DetailSection
        title="Reversal"
        description={law.reversal} />
    </div>
  )
}

export default LawDetails
