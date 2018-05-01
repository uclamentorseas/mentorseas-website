/* eslint-disable */

import * as React from 'react'
import './SearchBar.scss'

type PropsType = {
  handleChange: func
}

class SearchBar extends React.Component<PropsType, StateType> {
  constructor(props) {
    super(props)
    this.state = {
      showClear: false,
      allowSearch: false,
      searchInput: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.clearSearch = this.clearSearch.bind(this)
  }

  clearSearch(e) {
    this.setState({ searchInput: '' })
    this.props.handleChange(e.target.value)
  }

  handleChange(e) {
    this.setState({ searchInput: e.target.value })
    this.props.handleChange(e.target.value)
  }

  render() {
    const clearStyle = this.state.searchInput ? { visibility: 'visible' } : { visibility: 'hidden' }
    const labelStyle = this.state.searchInput
      ? {
          fontSize: '12px',
          top: '5px'
        }
      : {}

    return (
      <div className="search-bar-div">
        {/* <SearchBarForm action=''>
          <SearchBarInput value={this.state.searchInput} onChange={this.handleChange} name='q' aria-required='true' />
          <SearchBarLabel for='search-field' style={labelStyle}>Search for a Friend...</SearchBarLabel>
          <SearchBarClear type='reset' onClick={this.clearSearch} style={clearStyle}>Clear</SearchBarClear>
        </SearchBarForm> */}
      </div>
    )
  }
}

export default SearchBar
