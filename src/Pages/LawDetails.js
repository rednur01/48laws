import React from 'react'
import DetailHead from '../Components/DetailHead'
import DetailSection from '../Components/DetailSection'
import laws from '../Data/laws.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import HeaderBar from '../Components/HeaderBar'
import PageShell from '../Components/PageShell'
import FooterBar from '../Components/FooterBar'

const LawDetails = (props) => {
  const number = props.match.params.number
  const index = number - 1
  const law = laws[index]

  const navBack =
    <FontAwesomeIcon icon="angle-left" />

  const favorite =
    <FontAwesomeIcon icon={["far", "star"]} />

  return (
    <div className="LawDetails">
      <HeaderBar
        nav={ navBack }
        title="Law Details"
        action={ favorite } />

      <PageShell>
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
      </PageShell>

      <FooterBar />
    </div>
  )
}

export default LawDetails
