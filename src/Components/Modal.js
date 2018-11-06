import React, { Component } from 'react'
import ReactDOM from 'react-dom'

const page = document.getElementById('root')

export default class Modal extends Component {
  modal =
    <div className="Modal">
      <div className="ModalBody">
        <div className="Header">
          {this.props.header}
        </div>
        <div className="Text">
          {this.props.children}
        </div>
        <div className="Footer">
          <button onClick={this.props.onAccept}>
            Add
          </button>
          <button onClick={this.props.onCancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>

  render() {
    return ReactDOM.createPortal(
      this.modal,
      page
    )
  }
}
