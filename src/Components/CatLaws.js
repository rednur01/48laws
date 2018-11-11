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
      list = list.filter(item => item !== number)
      setDeletion(list)
    }
  }

  const removeLaw = (number) => {
    props.removeLaw(number)
    unmarkDeletion(number)
  }

  let lawList
  if (props.laws.length) {
    lawList =
    <ul>
      {
        props.laws.map( item =>
          <li
            key={item.law} >

            <CatLawTile
              index={item.law}
              text={ laws[item.law-1].title }
              progress={item.progress}
              cycleProgress={ () => props.cycleProgress(item) }
              marked={ deletion.includes(parseInt(item.law)) ? true:false }
              markDeletion={ () => markDeletion(item.law) }
              unmarkDeletion={ () => unmarkDeletion(item.law) }
              removeLaw={ () => removeLaw(item.law) } />
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
