import React, { useEffect } from 'react'
import Modal from './Modal'

export default (props) => {
  //try to make it work with state
  //buggy, couldn't set values. 11/5/18

  useEffect( () => {
    document.querySelector(".AddCatDialog > input").focus()
  } )

  const getTitle = () => {
    return document.querySelector(".AddCatDialog > input").value
  }

  const getDescription = () => {
    return document.querySelector(".AddCatDialog > textarea").value
  }

  return (
    <Modal
      header="Add Category"
      onAccept={ () => props.onAccept( getTitle(), getDescription() ) }
      onCancel={props.onCancel} >
      <div className="AddCatDialog">

        Name: <br/>
        <input type="text" maxLength="40" />

        <br/><br/>

        Description: <br/>
        <textarea rows="5"/>

      </div>
    </Modal>
  )
}
