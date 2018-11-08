import React, { useState } from 'react'
import CatLawTile from '../Components/CatLawTile'
import NotFound404 from '../Components/NotFound404'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import laws from '../Data/laws.json'

export default (props) => {
  const [ deletion, setDeletion ] = useState([])

  const markDeletion = (number) => {
    setDeletion([number])
  }

  const unmarkDeletion = (number) => {
    if (deletion.includes(number)) {
      let list = deletion
      list = list.filter( item => item!==number)
      setDeletion(list)
    }
  }

  const toggleDeletion = (e, number) => {
    //Prevent context menu
    //Remove selection
    e.preventDefault()
    window.getSelection().removeAllRanges()
    number = parseInt(number)

    //If not marked, mark for deletion
    //If marked, delete
    if (!deletion.includes(number)) {
      markDeletion(number)
      props.showToast("Long press again to delete. Tap to clear selection.")
    } else {
      props.removeLaw(number)
    }
  }

  let lawList
  if (props.laws.length) {
    lawList =
    <ul>
      {
        props.laws.map( item =>
          <li
            key={item.law}
            className={ deletion.includes(parseInt(item.law)) ? "toDelete" : undefined }
            onContextMenu={ (e) => toggleDeletion(e, item.law) }
            onClick={ () => unmarkDeletion(item.law) } >

            <CatLawTile
              index={item.law}
              text={ laws[item.law-1].title }
              progress={item.progress}
              cycleProgress={ () => props.cycleProgress(item) } />
          </li>
        )
      }
    </ul>
  } else {
    lawList =
    <NotFound404>
      <p>No laws in this category</p>
      <p>Press the <FontAwesomeIcon icon="plus" style={{padding:"0 2px"}}/> above to add one</p>
    </NotFound404>
  }

  return (
    <div className="CatLaws">
      { lawList }
    </div>
  )
}
