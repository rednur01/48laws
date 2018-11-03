import React from 'react'

import HeaderBar from '../Components/HeaderBar'
import PageShell from '../Components/PageShell'
import FooterBar from '../Components/FooterBar'

const CatOverview = () => {
  return (
    <div className="CatOverview">
      <HeaderBar
        title="Categories" />

      <PageShell>
        Coming Soon
      </PageShell>

      <FooterBar />
    </div>
  )
}

export default CatOverview
