// @flow

import * as React from 'react'
import { Link } from 'react-router-dom'

type PropsType = {
  item: {
    path: string,
    name: string
  },
  onClick?: () => void
};

export default (props: PropsType) => {
  const {
    item,
    onClick = null
  } = props

  return (
    <div
      className='hvr-grow nav-item'
      key={item.path}
      onClick={onClick}
      role='link'
      tabIndex='0'
    >
      <Link to={item.path}>
        {item.name.toUpperCase()}
      </Link>
    </div>
  )
}
