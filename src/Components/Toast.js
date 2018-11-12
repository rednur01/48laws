import React from 'react'
import ReactDOM from 'react-dom'

export default (props) => {
  const page = document.getElementById('root')
  return ReactDOM.createPortal(
    <div className="Toast">
      {props.text}
    </div>,
    page
  )
}
