import React from 'react'
import Modal from './Modal'

export default (props) => {
  return (
    <Modal
      header="Confirm Delete"
      accept="Delete"
      onAccept={ props.onAccept }
      onCancel={props.onCancel} >
      <div className="DeleteCatDialog">
        Are you sure you want to delete this category? This change is irreversible.
      </div>
    </Modal>
  )
}
