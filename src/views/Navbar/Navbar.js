// @flow

import * as React from 'react'
import { pages } from 'app'
import NavItem from './NavItem'
import NavLogo from './NavLogo'

import './Navbar.scss'

type PropsType = {}

type StateType = {
  panelOpen: boolean
}

export default class Navbar extends React.Component<PropsType, StateType> {
  navItems: Array<React.Element<typeof NavItem>>
  panelItems: Array<React.Element<typeof NavItem>>
  handleBurgerClick: () => void
  togglePanel: () => void

  constructor(props: PropsType) {
    super(props)
    this.state = {
      panelOpen: false
    }

    this.handleBurgerClick = this.handleBurgerClick.bind(this)
    this.togglePanel = this.togglePanel.bind(this)

    this.navItems = pages.map((page: PageType): React.Element<*> => <NavItem key={page.path} item={page} />)

    this.panelItems = pages.map((page: PageType): React.Element<*> => (
      <NavItem key={page.path} item={page} onClick={this.togglePanel} />
    ))
  }

  handleBurgerClick() {
    this.togglePanel()
  }

  openPanel() {
    this.setState({ panelOpen: true })
  }

  closePanel() {
    this.setState({ panelOpen: false })
  }

  togglePanel() {
    if (this.state.panelOpen) {
      this.closePanel()
    } else {
      this.openPanel()
    }
  }

  render(): React.Element<*> {
    return (
      <div className="navbar">
        <NavLogo />

        <div className="navbar-tabs">{this.navItems}</div>

        <div
          className={`navbar-hamburger ${this.state.panelOpen ? 'open' : 'closed'}`}
          onClick={this.handleBurgerClick}
          role="button"
          tabIndex="0"
        >
          <div /> <div /> <div />
        </div>

        <div className={`nav-panel ${this.state.panelOpen ? 'open' : 'closed'}`}>{this.panelItems}</div>
      </div>
    )
  }
}
