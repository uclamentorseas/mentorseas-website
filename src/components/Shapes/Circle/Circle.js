import React from 'react';
import { STROKE_WIDTH_FACTOR } from '../constants';
import './Circle.scss';

export default function Circle(props) {

  const diameter = props.size;
  const radius = diameter / 2;

  const strokeWidth = diameter * STROKE_WIDTH_FACTOR;

  return (
    <svg
      className='circle'
      width={`${diameter}px`}
      height={`${diameter}px`}
      viewBox={`0 0 ${diameter} ${diameter}`}
      xmlns='http://www.w3.org/2000/svg'
    >
      <g
        className='fill'
        fill='none'
        >
          <g
            className='stroke'
            strokeWidth={strokeWidth}
            >
              <circle
                className='shape'
                cx={radius}
                cy={radius}
                r={radius - strokeWidth}
              />
          </g>
        </g>
    </svg>
  );
}
