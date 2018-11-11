import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default (props) => {
  const colors = [ "var(--red)", "var(--orange)", "var(--green)" ]
  const icons = [ ["far","circle"], "adjust", "circle"]

  const top = props.marked? "Top Delete" : "Top"

  //Only defined if deletable
  const markDeletion = (e) => {
    e.preventDefault()
    if (props.markDeletion) {
      props.markDeletion()
    }
  }

  const unmarkDeletion = () => {
    if (props.marked) {
      props.unmarkDeletion()
    }
  }

  return (
    <div className="CatLawTile">
      <div
        className={ top }
        onContextMenu={ markDeletion }
        onClick = { unmarkDeletion } >
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

      <div className="Bottom">
        <button onClick={ props.removeLaw }>
          Delete
        </button>
      </div>
    </div>
  )
}
