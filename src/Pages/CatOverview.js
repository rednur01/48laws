import React from 'react'

import HeaderBar from '../Components/HeaderBar'
import PageShell from '../Components/PageShell'
import FooterBar from '../Components/FooterBar'

export default () => {
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
