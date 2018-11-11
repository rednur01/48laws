import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default (props) => {
  const colors = [ "var(--red)", "var(--orange)", "var(--green)" ]
  const icons = [ ["far","circle"], "adjust", "circle"]

  const top = props.marked? "Top Delete" : "Top"

  const [ swipeStart, setSwipeStart ] = useState(0)
  const threshold = 30; //pixels

  //Only defined if deletable
  const markDeletion = () => {
    if (props.markDeletion && !props.marked) {
      props.markDeletion()
    }
  }

  const unmarkDeletion = () => {
    if (props.marked) {
      props.unmarkDeletion()
    }
  }

  const swipeEnd = ( x ) => {
    if ( swipeStart-x > threshold ) {
      //Left swipe
      markDeletion()
    }
    else if ( x-swipeStart > threshold) {
      //Right swipe
      unmarkDeletion()
    }
    else {
      //Just a tap
    }
  }

  return (
    <div className="CatLawTile">
      <div
        className={ top }
        onClick = { unmarkDeletion }
        onTouchStart = { (e) => setSwipeStart(e.changedTouches[0].clientX)}
        onTouchEnd = { (e) => swipeEnd(e.changedTouches[0].clientX)} >
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
