import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default (props) => {
  const colors = [ "var(--red)", "var(--orange)", "var(--green)" ]
  const icons = [ ["far","circle"], "adjust", "circle"]

  //Top layer has 3 states:
  //Top (flush), toDelete (just exposing button), Deleting (removed)
  const [ topClass, setTopClass ] = useState("Top")

  const [ swipeStart, setSwipeStart ] = useState(0)
  const threshold = 30; //px

  const markToDelete = () => {
    setTopClass("Top toDelete")
  }

  const unmarkToDelete = () => {
    setTopClass("Top")
  }

  const removeLaw = () => {
    setTopClass("Top Deleting")
    setTimeout(props.removeLaw, 600)
  }

  const swipeEnd = ( x ) => {
    if (props.deletable) {
      if ( swipeStart-x > threshold ) {
        //Left swipe
        if ( !topClass.includes("toDelete") ) {
          markToDelete()
        } else {
          removeLaw()
        }
      }
      else if ( x-swipeStart > threshold) {
        //Right swipe
        unmarkToDelete()
      }
    }
  }

  return (
    <div className="CatLawTile">
      <div
        className={ topClass }
        onClick = { unmarkToDelete }
        onContextMenu = { e => { e.preventDefault(); markToDelete() } }
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
        <button onClick={ removeLaw }>
          Delete
        </button>
      </div>
    </div>
  )
}
