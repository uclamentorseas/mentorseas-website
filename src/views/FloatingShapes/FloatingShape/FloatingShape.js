// @flow

import React from 'react'
import Radium from 'radium'
import './FloatingShape.scss'

type PropsType = {
  children: React.Element<*>
};

const FloatingShape = (props: PropsType): React.Element<*> => (
  <div
    className='floating-shape'
    {...props}
  >
    {props.children}
  </div>
)

export default Radium(FloatingShape)
