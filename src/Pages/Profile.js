import React from 'react'

import HeaderBar from '../Components/HeaderBar'
import PageShell from '../Components/PageShell'
import FooterBar from '../Components/FooterBar'

export default () => {
  return (
    <div className="Profile">
      <HeaderBar
        title="Profile" />

      <PageShell>
        Coming Soon
      </PageShell>

      <FooterBar />
    </div>
  )
}
