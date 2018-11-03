import React, { Component } from 'react'
import ReactDOM from 'react-dom'

const page = document.getElementById('root')

class Toast extends Component {
  render() {
    return ReactDOM.createPortal(
      <div className="Toast">
        {this.props.text}
      </div>,
      page
    )
  }
}

export default Toast
