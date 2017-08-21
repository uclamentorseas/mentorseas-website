// @flow

import React from 'react'
import constants from '../constants'
import './Squiggle.scss'

export default (props: ShapeProps): React.Element<*> => {
  const {
    STROKE_WIDTH_FACTOR,
    SQUIGGLE
  } = constants

  const height = props.size / 5
  const strokeWidth = props.size * STROKE_WIDTH_FACTOR

  const width = height * 5
  // M: x-distance between trough and peak
  const M = width / (SQUIGGLE.NUM_WAVES * 2)
  // N: control point distance from point
  const N = M * SQUIGGLE.CURVINESS

  // Top height
  const topHeight = strokeWidth / 2
  // Bottom height
  const bottomHeight = height - topHeight

  // Returns a Cubic bezier string from a bottom origin point
  const bottomToTop = (originPoint: number): string => (
    `C
      ${((originPoint - 1) * M) + N},${bottomHeight}
      ${(originPoint * M) - N},${topHeight}
      ${(originPoint * M)},${topHeight}
    `
  )

  // Returns a Cubic bezier string from a top origin point
  const topToBottom = (originPoint: number): string => (
    `C
      ${((originPoint - 1) * M) + N},${topHeight}
      ${(originPoint * M) - N},${bottomHeight}
      ${originPoint * M},${bottomHeight}
    `
  )

  const squigglePath = [
    `M 0,${bottomHeight}`,
    bottomToTop(1),
    topToBottom(2),
    bottomToTop(3),
    topToBottom(4),
    bottomToTop(5),
    topToBottom(6),
    bottomToTop(7)
  ].join(' ')

  return (
    <svg
      className='squiggle shape'
      width={`${width}px`}
      height={`${height}px`}
      viewBox={`0 0 ${width} ${height}`}
      xmlns='http://www.w3.org/2000/svg'
    >
      <g className='fill' fill='none'>
        <g className='stroke' strokeWidth={strokeWidth}>
          <path d={squigglePath} />
        </g>
      </g>
    </svg>
  )
}
