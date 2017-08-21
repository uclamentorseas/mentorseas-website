// @flow

import React from 'react'
import { Link } from 'react-router-dom'

type PropsType = {
  item: {
    path: string,
    name: string
  },
  onClick: () => void
};

export default (props: PropsType): React.Element<*> => (
  <div
    className='hvr-grow nav-item'
    key={props.item.path}
    onClick={props.onClick}
    role='link'
    tabIndex='0'
  >
    <Link to={props.item.path}>
      {props.item.name.toUpperCase()}
    </Link>
  </div>
)
