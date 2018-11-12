import React, { useState } from 'react'
import CatHead from '../Components/CatHead'
import CatLaws from '../Components/CatLaws'
import AddLawDialog from '../Components/AddLawDialog'
import DeleteCatDialog from '../Components/DeleteCatDialog'
import NotFound404 from '../Components/NotFound404'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as storage from '../storage'

import HeaderBar from '../Components/HeaderBar'
import PageShell from '../Components/PageShell'
import FooterBar from '../Components/FooterBar'

export default (props) => {
  //Force re-render (after storage update, for example)
  // eslint-disable-next-line
  const [ bool, refresh ] = useState(true)

  const name = props.match.params.name
  const category = storage.getCategory(name)

  //Add laws to category
  const addLaws = (list) => {
    if( list.length ) {
      list.forEach( item => storage.addCategoryLaw(name, item) )
    }
    props.closeModal()
    props.showToast("Laws Added")
  }

  //Remove a law from the list
  const removeLaw = (number) => {
    storage.removeCategoryLaw(name, number)
    props.showToast(`Law ${number} Removed`)
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
    const progress = (law.progress % 3) + 1
    storage.setCategoryLawProgress(name, law.law, progress)
    refresh(true)
  }

  const confirmDelete = () => {
    props.history.goBack()
    storage.removeCategory(name)
    props.closeModal()
    props.showToast(`"${name}" Deleted`)
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
            title={ category.title }
            description={ category.description } />

          <CatLaws
            laws={ category.laws }
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
