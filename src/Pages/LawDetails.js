import React, { useState } from 'react'
import DetailHead from '../Components/DetailHead'
import DetailSection from '../Components/DetailSection'
import laws from '../Data/laws.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import HeaderBar from '../Components/HeaderBar'
import PageShell from '../Components/PageShell'
import FooterBar from '../Components/FooterBar'

export default (props) => {
  //Get law number from route
  const number = parseInt(props.match.params.number)
  const index = number - 1
  const law = laws[index]

  // //Get favorite state
  const favoriteLaws = JSON.parse( localStorage.getItem("favoriteLaws") )
  const [ isFavorite, setIsFavorite ] = useState( favoriteLaws.includes(number) );

  //Favorite toggles
  const addFavorite = () => {
    let updatedList = favoriteLaws
    updatedList.push(number)
    updatedList.sort( (a,b) => a-b )
    localStorage.setItem("favoriteLaws", JSON.stringify(updatedList))
    setIsFavorite(true)
    props.showToast("Added to Favorites")
  }

  const removeFavorite = () => {
    let updatedList = favoriteLaws.filter( item => item !== number )
    localStorage.setItem("favoriteLaws", JSON.stringify(updatedList))
    setIsFavorite(false)
    props.showToast("Removed from Favorites")
  }

  const toggleFavorite = () => {
    isFavorite? removeFavorite() : addFavorite()
  }

  const NavBack = () => {
    return (
      <div onClick={ () => {
          props.history.goBack()
          window.getSelection().removeAllRanges()
        } }>
        <FontAwesomeIcon icon="angle-left" /> Laws
      </div>
    )
  }

  const Favorite = () => {
    const regular = ["far","star"]
    const solid = "star"
    const icon = isFavorite? solid : regular
    return (
      <div>
        <FontAwesomeIcon
          icon={ icon }
          onClick={ toggleFavorite }/>
      </div>
    )
  }

  return (
    <div className="LawDetails">
      <HeaderBar
        nav= <NavBack/>
        title="Law Details"
        action= <Favorite/> />

      <PageShell>
        <DetailHead
          number={law.number}
          title={law.title}
          description={law.description} />
        <DetailSection
          title="Keys To Power"
          description={law.keysToPower} />
        <DetailSection
          title="Reversal"
          description={law.reversal} />
      </PageShell>

      <FooterBar />
    </div>
  )
}
