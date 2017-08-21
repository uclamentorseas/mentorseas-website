// @flow

import React from 'react'
import constants from '../constants'
import './Triangle.scss'

export default (props: ShapeProps): React.Element<*> => {
  const { STROKE_WIDTH_FACTOR } = constants

  const length = props.size
  const strokeWidth = length * STROKE_WIDTH_FACTOR

  const root5 = Math.sqrt(5)

  const x1 = 0.5 * length
  const y1 = strokeWidth * root5

  const x2 = length - ((strokeWidth * (1 + root5)) / 2)
  const y2 = length - strokeWidth

  const x3 = ((strokeWidth * (1 + root5)) / 2)
  const y3 = length - strokeWidth

  return (
    <svg
      className='triangle shape'
      viewBox={`0 0 ${length} ${length}`}
      width={`${length}px`}
      height={`${length}px`}
      xmlns='http://www.w3.org/2000/svg'
    >
      <g className='fill' fill='none'>
        <g className='stroke' strokeWidth={strokeWidth}>
          <path
            x={strokeWidth}
            y={strokeWidth}
            className='shape'
            d={`M${x1},${y1} L${x2},${y2} L${x3},${y3} Z`}
          />
        </g>
      </g>
    </svg>
  )
}
