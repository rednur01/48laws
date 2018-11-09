import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default (props) => {
  const colors = [ "var(--red)", "var(--orange)", "var(--green)" ]
  const icons = [ ["far","circle"], "adjust", "circle"]

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
