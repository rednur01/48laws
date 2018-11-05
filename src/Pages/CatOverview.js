import React, { useState } from 'react'
import NotFound404 from '../Components/NotFound404'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import HeaderBar from '../Components/HeaderBar'
import PageShell from '../Components/PageShell'
import FooterBar from '../Components/FooterBar'

export default (props) => {

  const storageCategories = JSON.parse(localStorage.getItem("categories"))
  const [ categories, setCategories ] = useState(storageCategories)

  const onAddCategory = () => {
    props.showToast("Categories Coming soon")
  }

  const addButton =
    <div>
      <FontAwesomeIcon
        icon="plus" size="lg" color="white"
        onClick={ onAddCategory } />
    </div>

  let catList
  catList =
  <NotFound404>
    <p>No categories found</p>
    <p>Use the <FontAwesomeIcon icon="plus" /> icon above to add one</p>
  </NotFound404>

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
