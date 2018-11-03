import React from 'react'

import HeaderBar from '../Components/HeaderBar'
import PageShell from '../Components/PageShell'
import FooterBar from '../Components/FooterBar'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const CatDetails = (props) => {
  const navBack =
    <div onClick={ () => {
        props.history.goBack()
        window.getSelection().removeAllRanges()
      } }>
      <FontAwesomeIcon icon="angle-left" /> Categories
    </div>

  return (
    <div className="CatDetails">
      <HeaderBar
        nav={ navBack }
        title="Category Details" />

      <PageShell>
        Coming Soon
      </PageShell>

      <FooterBar />
    </div>
  )
}

export default CatDetails
