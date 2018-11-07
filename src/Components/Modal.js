import React from 'react'
import ReactDOM from 'react-dom'

export default (props) => {
  const page = document.getElementById('root')
  const modal =
  <div className="Modal">
    <div className="ModalBody">
      <div className="Header">
        {props.header}
      </div>
      <div className="Text">
        {props.children}
      </div>
      <div className="Footer">
        <button onClick={ props.onAccept }>
          { props.accept || "Accept" }
        </button>
        <button onClick={ props.onCancel }>
          { props.cancel || "Cancel" }
        </button>
      </div>
    </div>
  </div>

  return ReactDOM.createPortal(
    modal,
    page
  )
}
