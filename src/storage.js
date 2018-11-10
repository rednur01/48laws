export const getFavorites = () => {
  return JSON.parse(localStorage.getItem("favoriteLaws"))
}

export const setFavorites = (list) => {
  list = JSON.stringify(list)
  localStorage.setItem("favoriteLaws", list)
  return true
}

export const addFavorite = (number) => {
  let favorites = getFavorites()
  if (!favorites.includes(number)) {
    favorites.push(number)
    favorites.sort( (first, second) => first-second )
    return setFavorites(favorites)
  }
  else {
    return false
  }
}

export const removeFavorite = (number) => {
  let favorites = getFavorites()
  if (favorites.includes(number)) {
    favorites = favorites.filter( law => law!==number )
    favorites.sort( (first, second) => first-second )
    return setFavorites(favorites)
  }
  else {
    return false
  }
}

export const getCategories = () => {
  return JSON.parse(localStorage.getItem("categories"))
}

export const setCategories = (list) => {
  list = JSON.stringify(list)
  localStorage.setItem("categories", list)
  return true
}

export const getCategory = (categoryName) => {
  const categories = getCategories()
  const category = categories.find( item => item.title === categoryName )
  return category || null
}

export const setCategory = (categoryName, object) => {
  let categories = getCategories()
  const index = categories.findIndex( item => item.title === categoryName )
  if (index > 0) {
    categories[index] = object
    return setCategories(categories)
  }
  else {
    return false
  }
}

export const addCategory = (object) => {
  let categories = getCategories()
  categories.push(object)
  return setCategories(categories)
}

export const removeCategory = (categoryName) => {
  let categories = getCategories()
  categories = categories.filter( category => category.title !== categoryName )
  return setCategories(categories)
}

export const getCategoryLaws = (categoryName) => {
  const category = getCategory(categoryName)
  return category.laws
}

export const setCategoryLaws = (categoryName, laws) => {
  let category = getCategory(categoryName)
  category.laws = laws
  return setCategory(categoryName, category)
}

export const addCategoryLaw = (categoryName, lawNumber) => {
  let laws = getCategoryLaws(categoryName)
  const index = laws.findIndex( item => item.law === lawNumber )
  if (index === -1) {
    laws.push({law: lawNumber, progress: 1})
    laws.sort( (first, second) => first.law - second.law)
    return setCategoryLaws(categoryName, laws)
  }
  else {
    return false
  }
}

export const removeCategoryLaw = (categoryName, lawNumber) => {
  let laws = getCategoryLaws(categoryName)
  laws = laws.filter( item => item.law !== lawNumber )
  return setCategoryLaws(categoryName, laws)
}

export const setCategoryLawProgress = (categoryName, lawNumber, progress) => {
  let laws = getCategoryLaws(categoryName)
  const index = laws.findIndex( item => item.law === lawNumber )
  laws[index] = {law: lawNumber, progress: progress}
  return setCategoryLaws(categoryName, laws)
}

export const init = () => {
  if (!localStorage.getItem("favoriteLaws")) {
    setFavorites([])
  }
  if (!localStorage.getItem("categories")) {
    setCategories([])
  }
}

export const flush = () => {
  setFavorites([])
  setCategories([])
}
