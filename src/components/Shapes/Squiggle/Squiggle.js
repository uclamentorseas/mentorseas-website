import React from 'react';
import { STROKE_WIDTH_FACTOR, SQUIGGLE } from '../constants';
import './Squiggle.scss';

export default function Squiggle(props) {

  const height = props.height;
  const strokeWidth = height * STROKE_WIDTH_FACTOR;

  const width = props.width;
  // M: x-distance between trough and peak
  const M = width / (SQUIGGLE.NUM_WAVES * 2);
  // N: control point distance from point
  const N = M * SQUIGGLE.CURVINESS;

  // Top height
  const topHeight = strokeWidth / 2;
  // Bottom height
  const bottomHeight = height - topHeight;

  // Returns a Cubic bezier string from a bottom origin point
  const bottomToTop = (originPoint) => (
    `C
      ${(originPoint-1)*M + N},${bottomHeight}
      ${originPoint*M - N},${topHeight}
      ${originPoint*M},${topHeight}
    `
  );

  // Returns a Cubic bezier string from a top origin point
  const topToBottom = (originPoint) => (
    `C
      ${(originPoint-1)*M + N},${topHeight}
      ${originPoint*M - N},${bottomHeight}
      ${originPoint*M},${bottomHeight}
    `
  );

  const squigglePath = [
    `M 0,${bottomHeight}`,
    bottomToTop(1),
    topToBottom(2),
    bottomToTop(3),
    topToBottom(4),
    bottomToTop(5),
    topToBottom(6),
    bottomToTop(7)
  ].join(' ');

  return (
    <svg
      className='squiggle'
      width={`${width}px`}
      height={`${height}px`}
      viewBox={`0 0 ${width} ${height}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        className='fill'
        fill='none'
      >
        <g
          className='stroke'
          strokeWidth={strokeWidth}
        >
          <path
            d={squigglePath}
          />
        </g>
      </g>
    </svg>
  );
}

// <path d="M10 80  C 40 10, 65 10, 95 80 S 150 150, 180 80" stroke="black" fill="transparent"/>
/*
<svg width="190" height="160" xmlns="http://www.w3.org/2000/svg">

  <path d="M10 10 C 20 20, 40 20, 50 10" stroke="black" fill="transparent"/>
  <path d="M70 10 C 70 20, 120 20, 120 10" stroke="black" fill="transparent"/>
  <path d="M130 10 C 120 20, 180 20, 170 10" stroke="black" fill="transparent"/>
  <path d="M10 60 C 20 80, 40 80, 50 60" stroke="black" fill="transparent"/>
  <path d="M70 60 C 70 80, 110 80, 110 60" stroke="black" fill="transparent"/>
  <path d="M130 60 C 120 80, 180 80, 170 60" stroke="black" fill="transparent"/>
  <path d="M10 110 C 20 140, 40 140, 50 110" stroke="black" fill="transparent"/>
  <path d="M70 110 C 70 140, 110 140, 110 110" stroke="black" fill="transparent"/>
  <path d="M130 110 C 120 140, 180 140, 170 110" stroke="black" fill="transparent"/>

</svg>
*/
