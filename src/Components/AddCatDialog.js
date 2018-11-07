import React, { useState } from 'react'
import Modal from './Modal'

export default (props) => {
  const [ title, setTitle ] = useState("")
  const [ description, setDescription ] = useState("")

  return (
    <Modal
      header="Add Category"
      accept="Add"
      onAccept={ () => props.onAccept(title, description) }
      onCancel={props.onCancel} >
      <div className="AddCatDialog">

        Name: <br/>
        <input type="text" maxLength="40"
          value={ title } onChange={ e => setTitle(e.target.value) } />

        <br/><br/>

        Description: <br/>
        <textarea rows="5"
          value={ description } onChange={ e => setDescription(e.target.value) } />

      </div>
    </Modal>
  )
}
