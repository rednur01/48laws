import React, { useState } from 'react'
import CatOverviewTile from '../Components/CatOverviewTile'
import NotFound404 from '../Components/NotFound404'
import AddCatDialog from '../Components/AddCatDialog'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import HeaderBar from '../Components/HeaderBar'
import PageShell from '../Components/PageShell'
import FooterBar from '../Components/FooterBar'

export default (props) => {

  const storageCategories = JSON.parse(localStorage.getItem("categories"))
  const [ categories, setCategories ] = useState(storageCategories)
  const categoryNames = storageCategories.map( item => item.title )

  const addNewCategory = (title, description) => {
    const newCategory = {
      title: title,
      description: description,
      laws: 0
    }

    let updatedCategories = storageCategories
    updatedCategories.push(newCategory)
    localStorage.setItem("categories", JSON.stringify(updatedCategories))
    setCategories(updatedCategories)

    props.closeModal()
  }

  const addModal =
    <AddCatDialog
      categories={ categoryNames }
      onAccept={ addNewCategory }
      onCancel={ props.closeModal } />

  const onAddCategory = () => {
    props.openModal( addModal )
  }

  const addButton =
    <div>
      <FontAwesomeIcon
        icon="plus" size="lg" color="white"
        onClick={ onAddCategory } />
    </div>

  let catList
  if(categories.length) {
    catList =
    <ul>
      {
        categories.map( (category) =>
          <li>
            <CatOverviewTile
              title={category.title}
              laws={category.laws}
              navLink={"/Category/" + category.title} />
          </li>
        )
      }
    </ul>
  } else {
    catList =
    <NotFound404>
      <p>No categories found</p>
      <p>Press the <FontAwesomeIcon icon="plus" style={{padding:"0 2px"}}/> above to add one</p>
    </NotFound404>
  }

  return (
    <div className="CatOverview">
      <HeaderBar
        title="Categories"
        action={ addButton } />

      <PageShell>
        {catList}
      </PageShell>

      <FooterBar />
    </div>
  )
}
