import React from 'react'

export default (props) => {
  return (
    <div className="HeaderBar">
      <div className="Nav" onClick={ props.onNav } >
        {props.nav}
      </div>

      <div className="Title">
        {props.title}
      </div>

      <div className="Action" onClick={ props.onAction } >
        {props.action}
      </div>
    </div>
  )
}
