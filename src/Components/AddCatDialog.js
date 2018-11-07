import React, { useState, useEffect } from 'react'
import Modal from './Modal'

export default (props) => {
  const [ title, setTitle ] = useState("")
  const [ description, setDescription ] = useState("")
  const [ emptyCheck, setEmptyCheck ] = useState(false)

  const input = () => document.querySelector(".AddCatDialog input")
  const errorLabel = () => document.querySelector(".AddCatDialog .ErrorLabel")

  const camel = (s) => s.charAt(0).toUpperCase() + s.slice(1)

  const activateEmptyError = () => {
    input().classList.add("invalid")
    errorLabel().innerHTML = "Name cannot be empty"
  }

  const deactivateEmptyError = () => {
    if( input().classList.contains("invalid") ) {
      input().classList.remove("invalid")
      errorLabel().innerHTML = ""
    }
  }

  const activateDuplicateError = () => {
    input().classList.add("invalid")
    errorLabel().innerHTML = "Category already exists, duplicates not allowed"
  }

  const deactivateDuplicateError = () => {
    if( input().classList.contains("invalid") ) {
      input().classList.remove("invalid")
      errorLabel().innerHTML = ""
    }
  }

  const approveSubmit = () => {
    props.onAccept( title, description )
  }

  const onSubmit = () => {
    //Start empty checks after first submit attempt
    if( !title && !emptyCheck ) {
      setEmptyCheck(true)
      return
    }

    //Only submit if not invalid
    if( !input().classList.contains("invalid") ) {
      approveSubmit()
    }
  }

  useEffect(() => {
    //Maintain empty name error status
    if ( emptyCheck && !title) {
      activateEmptyError()
      return
    } else if ( emptyCheck && title ) {
      deactivateEmptyError()
    }

    //Maintain duplicate error status
     if ( props.categories.includes( title.trim() ) ) {
      activateDuplicateError()
      return
    } else {
      deactivateDuplicateError()
    }
  })

  return (
    <Modal
      header="Add Category"
      accept="Add"
      onAccept={ onSubmit }
      onCancel={props.onCancel} >
      <div className="AddCatDialog">

        <label>
          Name:  <label className="ErrorLabel"/>  <br/>
        <input type="text" maxLength="40" name="name" autoComplete="off"
          value={ title } onChange={ e => setTitle(camel(e.target.value.trimStart())) } />
        </label>

        <br/><br/>

        <label>
          Description: <br/>
          <textarea rows="5" name="description"
            value={ description } onChange={ e => setDescription(e.target.value) } />
        </label>
      </div>
    </Modal>
  )
}
