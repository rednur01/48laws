import React, { useState } from 'react'
import CatHead from '../Components/CatHead'
import CatLaws from '../Components/CatLaws'
import AddLawDialog from '../Components/AddLawDialog'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import HeaderBar from '../Components/HeaderBar'
import PageShell from '../Components/PageShell'
import FooterBar from '../Components/FooterBar'

export default (props) => {
  //Force re-render (after storage update, for example)
  const [ bool, refresh ] = useState(true)

  //Get category name from route
  //Find details from storage
  const name = props.match.params.name
  const storageCategories = JSON.parse(localStorage.getItem("categories"))
  const category = storageCategories.find( item => item.title === name )

  const navBack =
    <div onClick={ () => {
        props.history.goBack()
        window.getSelection().removeAllRanges()
      } }>
      <FontAwesomeIcon icon="angle-left" /> Categories
    </div>

  //Take new list of laws for current category
  //Merge with all categories and update localStorage
  const updateStorageCategories = ( newLaws ) => {
    let updatedCategory = category
    updatedCategory.laws = newLaws

    let updatedStorage = storageCategories
    let index = updatedStorage.findIndex( item => item.title === name )
    updatedStorage[index] = updatedCategory

    localStorage.setItem("categories", JSON.stringify(updatedStorage))
    refresh(true)
  }

  //Add laws to category
  const addLaws = (list) => {
    if( list.length ) {
      let updatedLaws = category.laws
      const lawNums = category.laws.map(item => parseInt(item.law))

      for( let i=0; i<list.length; ++i ) {
        if( !lawNums.includes(list[i]) ) {
          updatedLaws.push({ law: list[i], progress: 1 })
        }
      }

      updatedLaws.sort( (first, second) => first.law - second.law )
      updateStorageCategories( updatedLaws )
    }

    props.closeModal()
    props.showToast("Laws Added")
  }

  //Modal for adding laws
  const addModal =
    <AddLawDialog
      onAccept={ addLaws }
      onCancel={ props.closeModal } />

  //On pressing the add law button
  const addLaw = () => {
    props.openModal( addModal )
  }

  //The add law button
  const addButton =
    <FontAwesomeIcon
      icon="plus" size="lg" color="white"
      onClick={ addLaw } />

  //Cycle through law progress states
  const cycleProgress = (law) => {
    law.progress = (law.progress % 3) + 1
    let updatedLaws = category.laws
    let index = updatedLaws.findIndex(e => e.law === law.law)
    updatedLaws[index] = law
    updateStorageCategories( updatedLaws )
  }

  return (
    <div className="CatDetails">
      <HeaderBar
        nav={ navBack }
        title="Category Details"
        action={ addButton } />

      <PageShell>
        <CatHead
          title={category.title}
          description={category.description} />

        <CatLaws
          laws={category.laws}
          cycleProgress={ cycleProgress }
          showToast={ props.showToast } />
      </PageShell>

      <FooterBar />
    </div>
  )
}
