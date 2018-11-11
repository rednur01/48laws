import React, { useState } from 'react'
import SearchBar from '../Components/SearchBar'
import LawOverviewTile from '../Components/LawOverviewTile'
import NotFound404 from '../Components/NotFound404'
import laws from '../Data/laws.json'
import { getFavorites } from '../storage'

import HeaderBar from '../Components/HeaderBar'
import PageShell from '../Components/PageShell'
import FooterBar from '../Components/FooterBar'

export default (props) => {
  const [ filtered, setFiltered ] = useState(laws)
  const [ search, setSearch ] = useState("")

  const filterLaws = ( searchValue ) => {
    let filteredLaws

    if (parseInt(searchValue)) {
      filteredLaws = laws.filter( law => law.number.startsWith(searchValue) )
      setFiltered(filteredLaws)
    }
    else if (searchValue === "") {
      setFiltered(laws)
    }
    else if (searchValue.trim() === "!") {
      const favorites = getFavorites()
      filteredLaws = laws.filter( law => favorites.includes(parseInt(law.number)) )
      setFiltered(filteredLaws)
    }
    else {
      filteredLaws = laws.filter( law => law.title.toLowerCase().includes(searchValue.toLowerCase()) )
      setFiltered(filteredLaws)
    }
  }

  const handleSearch = (event) => {
    const value = event.target.value
    setSearch(value)
    filterLaws(value)
  }

  const clearSearch = () => {
    setSearch("")
    filterLaws("")
  }

  const LawList = ( props ) => {
    if( props.laws.length ) {
      return (
        <ul>
          { props.laws.map( law =>
              <li key={law.number}>
                <LawOverviewTile
                  index={law.number}
                  text={law.title}
                  navLink={"/Law/" + law.number} />
              </li>
            )}
        </ul>
      )
    } else {
      return (
        <NotFound404>
          No Laws Found
        </NotFound404>
      )
    }
  }

  return (
    <div className="LawOverview">
      <HeaderBar title="The 48 Laws of Power" />
      <PageShell>
        <SearchBar
          placeholder="Search"
          value={search}
          onSearch={handleSearch}
          clearSearch={clearSearch} />

        <LawList laws={filtered} />
      </PageShell>
      <FooterBar />
    </div>
  )
}
