import React from 'react';

import './SlideOutPanel.scss';

export default class SlideOutPanel extends React.Component {
  render() {
    const {
      isOpen,
      children,
      direction,
      className
    } = this.props;

    let panelClass = 'panel'
    panelClass += ` ${direction}`
    panelClass += isOpen ? ' go' : ''
    panelClass += ` ${className}`

    return (
      <div className={panelClass} style={{direction}}>
        {children}
      </div>
    )
  }
}
