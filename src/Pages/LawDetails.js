import React from 'react'
import DetailHead from '../Components/DetailHead'
import DetailSection from '../Components/DetailSection'
import laws from '../Data/laws.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import HeaderBar from '../Components/HeaderBar'
import PageShell from '../Components/PageShell'
import FooterBar from '../Components/FooterBar'

export default (props) => {
  const number = props.match.params.number
  const index = number - 1
  const law = laws[index]

  const navBack =
    <div onClick={ () => {
        props.history.goBack()
        window.getSelection().removeAllRanges()
      } }>
      <FontAwesomeIcon icon="angle-left" /> Laws
    </div>

  const favorite =
    <div onClick={ () => props.showToast("Favorites coming soon") }>
      <FontAwesomeIcon icon={["far", "star"]} />
    </div>

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
