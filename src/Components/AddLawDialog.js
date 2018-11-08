import React, { useState } from 'react'
import Modal from './Modal'
import CatLawTile from './CatLawTile'
import laws from '../Data/laws.json'

export default (props) => {
  const [ selected, setSelected ] = useState([])

  const addSelected = (n) => {
    n = parseInt(n)
    let updated = selected
    updated.push(n)
    setSelected(updated)
  }

  const removeSelected = (n) => {
    n = parseInt(n)
    let updated = selected
    updated = updated.filter( e => e!==n )
    setSelected(updated)
  }

  const toggleSelected = (n) => {
    if (selected.includes(parseInt(n))) {
      removeSelected(n)
    } else {
      addSelected(n)
    }
  }

  const lawList =
    <ul>
      {
        laws.map( law =>
          <li key={law.number}
              className={
                selected.includes(parseInt(law.number)) ? "selected" : undefined
              }
              onClick={ () => toggleSelected(law.number) } >
            <CatLawTile
              index={law.number}
              text={law.title} />
          </li>
        )
      }
    </ul>

  return (
    <Modal
      header="Add Laws"
      accept="Add"
      onAccept={() => props.onAccept(selected)}
      onCancel={props.onCancel} >
      <div className="AddLawDialog">
        { lawList }
      </div>
    </Modal>
  )
}
