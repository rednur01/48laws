import React, { Component } from 'react'
import SearchBar from '../Components/SearchBar'
import LawOverviewTile from '../Components/LawOverviewTile'
import NotFound404 from '../Components/NotFound404'

import HeaderBar from '../Components/HeaderBar'
import PageShell from '../Components/PageShell'
import FooterBar from '../Components/FooterBar'

import laws from '../Data/laws.json'

class LawOverview extends Component {
  constructor(props) {
    super(props)
    this.onSearch = this.onSearch.bind(this)
    this.lawFilter = this.lawFilter.bind(this)
    this.state = {
      search: "",
      laws: laws
    }
  }

  onSearch( event ) {
    const value = event.target.value
    this.setState({ search: value })
    this.lawFilter(value)
  }

  lawFilter( search ) {
    if ( parseInt(search) ) {
      let filtered = laws.filter( law => law.number.startsWith(search) )
      this.setState({ laws: filtered })
    } else {
      search = search.toLowerCase()
      let filtered = laws.filter( law => law.title.toLowerCase().includes(search) )
      this.setState({ laws: filtered })
    }
  }

  render() {
    let lawList
    if (this.state.laws.length) {
      lawList =
      <ul>
        {
          this.state.laws.map( (law) =>
            <li key={law.number}>
              <LawOverviewTile
                index={law.number}
                text={law.title}
                navLink={"/Law/" + law.number} />
            </li>
          )
        }
      </ul>
    } else {
      lawList =
      <NotFound404>
        No Laws Found
      </NotFound404>
    }
    return (
      <div className="LawOverview">
        <HeaderBar title="The 48 Laws of Power"/>
        <PageShell>
          <SearchBar placeholder="Search" onSearch={this.onSearch} value={this.state.search}/>
          { lawList }
        </PageShell>
        <FooterBar />
      </div>
    )
  }
}

export default LawOverview
