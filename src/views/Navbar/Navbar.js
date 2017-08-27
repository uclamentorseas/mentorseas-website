// @flow

import * as React from 'react'
import { pages } from 'app'
import NavItem from './NavItem'
import NavLogo from './NavLogo'
import NavPanel from './NavPanel'

import './Navbar.scss'

type LayoutType = 'tabbed' | 'hamburger-menu';

type PropsType = {};

type StateType = {
  layoutType: LayoutType,
  panelOpen: boolean
};

const BURGER_BREAKPOINT = 600

export default class Navbar extends React.Component<PropsType, StateType> {
  navItems: Array<React.Element<typeof NavItem>>
  panelItems: Array<React.Element<typeof NavItem>>

  static determineLayout(): LayoutType {
    return window.innerWidth < BURGER_BREAKPOINT ? 'hamburger-menu' : 'tabbed'
  }

  constructor(props: PropsType) {
    super(props)
    this.state = {
      layoutType: Navbar.determineLayout(),
      panelOpen: false
    }

    this.handleBurgerClick = this.handleBurgerClick.bind(this)
    this.handleWindowResize = this.handleWindowResize.bind(this)

    this.navItems = pages.map((page: PageType): React.Element<*> => (
      <NavItem
        key={page.path}
        item={page}
      />
    ))

    this.panelItems = pages.map((page: PageType): React.Element<*> => (
      <NavItem
        key={page.path}
        item={page}
        onClick={this.closePanel}
      />
    ))
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleWindowResize)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowResize)
  }

  handleBurgerClick = () => {
    this.togglePanel()
  }

  handleWindowResize = () => {
    const newLayout = Navbar.determineLayout()
    if (newLayout !== this.state.layoutType) {
      this.setState({ layoutType: newLayout })
    }
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

  renderTabbedLayout(): React.Element<*> {
    return (
      <div className='navbar tabbed-layout'>
        <div className='nav-header'>
          <NavLogo />

          <div className='navbar-tabs'>
            {this.navItems}
          </div>
        </div>
      </div>
    )
  }

  renderHamburgerLayout(): React.Element<*> {
    return (
      <div className='navbar hamburger-layout'>
        <div className='nav-header'>
          <NavLogo />

          <div
            className={`navbar-hamburger ${this.state.panelOpen ? 'open' : 'closed'}`}
            onClick={this.handleBurgerClick}
            role='button'
            tabIndex='0'
          >
            <div /> <div /> <div />
          </div>
        </div>

        <NavPanel
          pages={pages}
          showPanel={this.state.panelOpen}
        />
      </div>
    )
  }

  render(): React.Element<*> {
    return (
      this.state.layoutType === 'tabbed' ?
        this.renderTabbedLayout() :
        this.renderHamburgerLayout()
    )
  }
}
