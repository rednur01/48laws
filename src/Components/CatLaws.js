import React from 'react'
import CatLawTile from '../Components/CatLawTile'
import NotFound404 from '../Components/NotFound404'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import laws from '../Data/laws.json'

export default (props) => {

  const removeLaw = (number) => {
    props.removeLaw(number)
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
              removeLaw={ () => removeLaw(item.law) }
              deletable={true} />
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
