import { useState, useMutationEffect } from 'react'
import { withRouter } from 'react-router-dom'

const ScrollRestoration = (props) => {

  const [ scrollHistory, setScrollHistory ] = useState([])

  useMutationEffect( () => {
    if ( props.history.action==="POP" ) {
      const scrollPos = scrollHistory.pop() || 0
      setScrollHistory( scrollHistory )
      let page = document.querySelector(".PageShell")
      page && page.scrollTo(0, scrollPos)
    }

    return () => {
      if ( props.history.action==="PUSH" ) {
        const scrollPos = document.querySelector(".PageShell").scrollTop
        scrollHistory.push( scrollPos )
        setScrollHistory( scrollHistory )
      }
    }
  }, [props.location.key])

  return (
    props.children
  )
}

export default withRouter(ScrollRestoration)
