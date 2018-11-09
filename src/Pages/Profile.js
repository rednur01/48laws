import React from 'react'
import NotFound404 from '../Components/NotFound404'

import HeaderBar from '../Components/HeaderBar'
import PageShell from '../Components/PageShell'
import FooterBar from '../Components/FooterBar'

export default () => {
  return (
    <div className="Profile">
      <HeaderBar
        title="Profile" />

      <PageShell>
        <NotFound404>
          Profile Settings Coming Soon
          <br/><br/>
          v0.9 - alpha
          <br/><br/>
          Developer: Red Nur <br/>
          UX Designer: Katie Zhao
        </NotFound404>
      </PageShell>

      <FooterBar />
    </div>
  )
}
