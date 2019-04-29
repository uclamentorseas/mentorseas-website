// @flow

import * as React from 'react'
import './SlideOutPanel.scss'

type PropsType = {
  isOpen: boolean,
  children: Array<React.Element<*>>,
  className: string,
  direction: string
}

export default (props: PropsType): React.Element<*> => (
  <div className={`panel ${props.direction} ${props.isOpen ? 'open' : 'closed'} ${props.className}`}>
    {props.children}
  </div>
)
