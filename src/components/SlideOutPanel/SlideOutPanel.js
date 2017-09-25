// @flow

import * as React from 'react'
import classNames from 'classnames'
import './SlideOutPanel.scss'

type PropsType = {
  isOpen: boolean,
  children: Array<React.Element<*>>,
  className: string,
  direction: string
};

export default (props: PropsType): React.Element<*> => {
  const panelClass = classNames({
    panel: true,
    [props.direction]: true,
    [props.isOpen ? 'open' : 'closed']: true,
    [props.className]: props.className
  })

  return (
    <div className={panelClass} >
      {props.children}
    </div>
  )
}
