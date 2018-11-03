import React from 'react'

const HeaderBar = (props) => {

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

export default HeaderBar
