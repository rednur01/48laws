import React from 'react'
import NotFound404 from '../Components/NotFound404'
import FlushStorageDialog from '../Components/FlushStorageDialog'
import { flush } from '../storage'

import HeaderBar from '../Components/HeaderBar'
import PageShell from '../Components/PageShell'
import FooterBar from '../Components/FooterBar'

export default (props) => {

  const flushStorage = () => {
    flush()
    props.closeModal()
    props.showToast("Storage Flushed")
  }

  const FlushModal = () => {
    return(
      <FlushStorageDialog
        onAccept={ flushStorage }
        onCancel={ props.closeModal } />
    )
  }

  const openFlushModal = () => {
    props.openModal( <FlushModal /> )
  }

  return (
    <div className="Profile">
      <HeaderBar
        title="Profile" />

      <PageShell>
        <NotFound404>
          Profile Settings Coming Soon
          <br/><br/>
          v0.9.2 - alpha
          <br/><br/>
          Developer: Red Nur <br/>
          UX Designer: Katie Zhao
        </NotFound404>

        <button
          onClick={openFlushModal}>
          Flush Storage
        </button>
      </PageShell>

      <FooterBar />
    </div>
  )
}
