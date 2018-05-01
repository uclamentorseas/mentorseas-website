// @flow

import * as React from 'react'
import constants from '../constants'
import './Square.scss'

export default (props: ShapeProps): React.Element<*> => {
  const { STROKE_WIDTH_FACTOR } = constants

  const width = props.size
  const strokeWidth = width * STROKE_WIDTH_FACTOR
  const shapeWidth = width - 2 * strokeWidth

  return (
    <svg
      className="square shape"
      viewBox={`0 0 ${width} ${width}`}
      width={`${width}px`}
      height={`${width}px`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="fill" fill="none">
        <g className="stroke" strokeWidth={strokeWidth}>
          <rect className="shape" x={strokeWidth} y={strokeWidth} width={shapeWidth} height={shapeWidth} />
        </g>
      </g>
    </svg>
  )
}
