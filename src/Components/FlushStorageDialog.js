import React from 'react'
import Modal from './Modal'

export default (props) => {
  return (
    <Modal
      header="Confirm Flush"
      accept="Flush"
      onAccept={ props.onAccept }
      onCancel={props.onCancel} >
      <div className="FlushStorageDialog">
        Only flush your storage if you're having trouble adding/deleting favorites, laws or categories. This change is irreversible and will reset your app memory.
        <br/><br/>
        Are you sure you want to do this?
      </div>
    </Modal>
  )
}
