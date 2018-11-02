import React, { Component } from 'react'
import SearchBar from '../Components/SearchBar'
import OverviewTile from '../Components/OverviewTile'
import NotFound404 from '../Components/NotFound404'
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
              <OverviewTile
                index={law.number}
                text={law.title}
                nav={"/Law/" + law.number} />
            </li>
          )
        }
      </ul>
    } else {
      lawList = <NotFound404 text="No Laws Found" />
    }
    return (
      <div className="LawOverview">
        <SearchBar placeholder="Search" onSearch={this.onSearch} value={this.state.search}/>
        { lawList }
      </div>
    )
  }
}

export default LawOverview
