import React, { useState } from 'react'
import CatOverviewTile from '../Components/CatOverviewTile'
import NotFound404 from '../Components/NotFound404'
import AddCatDialog from '../Components/AddCatDialog'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as storage from '../storage'

import HeaderBar from '../Components/HeaderBar'
import PageShell from '../Components/PageShell'
import FooterBar from '../Components/FooterBar'

export default (props) => {

  const storageCategories = storage.getCategories()
  const [ categories, setCategories ] = useState(storageCategories)
  const categoryNames = storageCategories.map( item => item.title )

  const addNewCategory = (title, description) => {
    const newCategory = {
      title: title,
      description: description,
      laws: []
    }
    storage.addCategory(newCategory)
    setCategories( storage.getCategories() )
    props.closeModal()
  }

  const AddModal = () => {
    return (
      <AddCatDialog
        categories={ categoryNames }
        onAccept={ addNewCategory }
        onCancel={ props.closeModal } />
    )
  }

  const onAddCategory = () => {
    props.openModal( <AddModal/> )
  }

  const AddButton = () => {
    return (
      <FontAwesomeIcon
        icon="plus" size="lg" color="white"
        onClick={ onAddCategory } />
    )
  }

  const CatList = () => {
    if (categories.length) {
      return (
        <ul>
          {
            categories.map( (category) =>
              <li>
                <CatOverviewTile
                  title={category.title}
                  laws={category.laws.length}
                  navLink={"/Category/" + category.title} />
              </li>
            )
          }
        </ul>
      )
    } else {
      return (
        <NotFound404>
          <p>No categories found</p>
          <p>Press the <FontAwesomeIcon icon="plus" style={{padding:"0 2px"}}/> above to add one</p>
        </NotFound404>
      )
    }
  }

  return (
    <div className="CatOverview">
      <HeaderBar
        title="Categories"
        action={ <AddButton/> } />

      <PageShell>
        <CatList/>
      </PageShell>

      <FooterBar />
    </div>
  )
}
