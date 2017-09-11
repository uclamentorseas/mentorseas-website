// @flow

import * as React from 'react'
import './SlideOutPanel.scss'

type PropsType = {
  isOpen: boolean,
  children: Array<React.Element<*>>,
  className: string,
  direction: string
};

export default (props: PropsType): React.Element<*> => {
  let panelClass = 'panel'
  panelClass += ` ${props.direction}`
  panelClass += props.isOpen ? ' go' : ''
  panelClass += ` ${props.className}`

  return (
    <div className={panelClass} >
      {props.children}
    </div>
  )
}
