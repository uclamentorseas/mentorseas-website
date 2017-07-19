import React from 'react';
import NavItem from './NavItem';
import NavLogo from './NavLogo';

import './Navbar.scss';

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      panelOpen: false
    };

    this.navItems = this.props.items.map(item => (
      <NavItem
        key={item.path}
        item={item}
      />
    ));

    this.panelItems = this.props.items.map(item => (
      <NavItem
        key={item.path}
        item={item}
        onClick={this.closePanel.bind(this)}
      />
    ))
  }

  openPanel() {
    this.setState({ panelOpen: true });
  }

  closePanel() {
    this.setState({ panelOpen: false });
  }

  togglePanel() {
    if (this.state.panelOpen) {
      this.closePanel();
    } else {
      this.openPanel();
    }
  }

  render() {
    return (
      <div className='navbar'>
        <NavLogo />

        <div className='navbar-tabs'>
          {this.navItems}
        </div>

        <div
          className={`navbar-hamburger ${this.state.panelOpen ? 'panel-open' : 'panel-closed'}`}
          onClick={this.togglePanel.bind(this)}
        >
          <div/><div/><div/>
        </div>

        <div
          className={`nav-panel ${this.state.panelOpen ? 'panel-open' : 'panel-closed'}`}
        >
          {this.panelItems}
        </div>
      </div>
    );
  }
}
