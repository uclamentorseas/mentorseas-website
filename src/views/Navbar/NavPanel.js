// @flow

import * as React from 'react'
import { TweenMax } from 'gsap'
import ReactTransitionGroup from 'react-addons-transition-group'

import NavItem from './NavItem'

import './NavPanel.scss'

type PanelPropsType = {
  children: React.Element<*> | Array<React.Element<*>>
};

class Panel extends React.Component<PanelPropsType> {
  props: PanelPropsType
  container: ?HTMLDivElement

  componentWillEnter(callback: () => void) {
    TweenMax.fromTo(
      this.container,
      0.3,
      {
        y: this.container && -this.container.offsetHeight
      },
      {
        y: 0,
        onComplete: callback
      }
    )
  }

  componentWillLeave(callback: () => void) {
    TweenMax.fromTo(
      this.container,
      0.3,
      {
        y: 0
      },
      {
        y: this.container && -this.container.offsetHeight,
        onComplete: callback
      }
    )
  }

  render(): React.Element<*> {
    return (
      <div
        ref={(c) => { this.container = c }}
        key='dropdown'
        className='nav-panel-display'
      >
        { this.props.children }
      </div>
    )
  }
}

type PropsType = {
  pages: Array<PageType>,
  showPanel: boolean
};

export default function NavbarDropdown(props: PropsType): React.Element<*> {
  const {
    pages,
    showPanel
  } = props

  return (
    <ReactTransitionGroup
      className='nav-panel'
    >
      { pages && showPanel && (
        <Panel>
          {
            pages.map((page: PageType): React.Element<*> => (
              <NavItem
                key={page.path}
                item={page}
              />
            ))
          }
        </Panel>
      )}
    </ReactTransitionGroup>
  )
}
