import React, { useState } from 'react'
import CatHead from '../Components/CatHead'
import CatLaws from '../Components/CatLaws'
import AddLawDialog from '../Components/AddLawDialog'
import DeleteCatDialog from '../Components/DeleteCatDialog'
import NotFound404 from '../Components/NotFound404'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import HeaderBar from '../Components/HeaderBar'
import PageShell from '../Components/PageShell'
import FooterBar from '../Components/FooterBar'

export default (props) => {
  //Force re-render (after storage update, for example)
  // eslint-disable-next-line
  const [ bool, refresh ] = useState(true)

  //Get category name from route
  //Find details from storage
  const name = props.match.params.name
  const storageCategories = JSON.parse(localStorage.getItem("categories"))
  const category = storageCategories.find( item => item.title === name )

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

  //Remove a law from the list
  const removeLaw = (number) => {
    const updatedLaws = category.laws.filter(item => item.law!==number)
    updateStorageCategories( updatedLaws )
    props.showToast("Law Removed")
  }

  //Modal for adding laws
  const AddModal = () => {
    return (
      <AddLawDialog
        onAccept={ addLaws }
        onCancel={ props.closeModal } />
    )
  }

  //On pressing the add law button
  const addLaw = () => {
    props.openModal( <AddModal /> )
  }

  //The add law button
  const AddButton = () => {
    return (
      <FontAwesomeIcon
        icon="plus" size="lg" color="white"
        onClick={ addLaw } />
    )
  }

  //Cycle through law progress states
  const cycleProgress = (law) => {
    law.progress = (law.progress % 3) + 1
    let updatedLaws = category.laws
    let index = updatedLaws.findIndex(e => e.law === law.law)
    updatedLaws[index] = law
    updateStorageCategories( updatedLaws )
  }

  const confirmDelete = () => {
    props.history.goBack()
    let updatedCategories = storageCategories.filter( item => item.title !== name)
    localStorage.setItem("categories", JSON.stringify(updatedCategories))
    props.closeModal()
  }

  const DeleteModal = () => {
    return (
      <DeleteCatDialog
        onAccept={ confirmDelete }
        onCancel={ props.closeModal } />
    )
  }

  const deleteCategory = () => {
    props.openModal( <DeleteModal /> )
  }

  const NavBack = () => {
    return (
      <div onClick={ () => {
          props.history.goBack()
          window.getSelection().removeAllRanges()
        } }>
        <FontAwesomeIcon icon="angle-left" /> Categories
      </div>
    )
  }

  return (
    <div className="CatDetails">
      <HeaderBar
        nav= <NavBack />
        title="Category Details"
        action= {Boolean(category) ? <AddButton /> : null} />

      { Boolean(category) &&
        <PageShell>
          <CatHead
            title={category.title}
            description={category.description} />

          <CatLaws
            laws={category.laws}
            cycleProgress={ cycleProgress }
            removeLaw={ removeLaw }
            showToast={ props.showToast } />

          <button onClick={ deleteCategory }>
            Delete {name}
          </button>
        </PageShell>
      }

      { Boolean(category) ||
        <PageShell>
          <NotFound404>
            Category {name} not found
          </NotFound404>
        </PageShell>
      }

      <FooterBar />
    </div>
  )
}
