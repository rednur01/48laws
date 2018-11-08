import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default (props) => {
  const colors = [ "var(--lust)", "var(--deep-safron)", "var(--harlequin-green)" ]
  const icons = [ "minus-circle", "circle", "check-circle"]

  return (
    <div className="CatLawTile">
      <div className="Index">
        {props.index}
      </div>

      <div className="Text">
        {props.text}
      </div>

      <div className="Progress" onClick={ props.cycleProgress } >
        {props.progress &&
          <FontAwesomeIcon
          size="lg"
          icon={ icons[props.progress-1] }
          color={ colors[props.progress-1] } />}
      </div>
    </div>
  )
}
