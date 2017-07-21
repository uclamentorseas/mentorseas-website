import React from 'react';

import './Triangle.scss';

export default function Triangle(props) {

  const width = props.width;
  const strokeWidth = width * 0.1;
  // Need to actually do some more complex trig calculations for this value
  const shapeWidth = width - (2 * strokeWidth);

  return (
    <svg
      className='triangle'
      viewBox={`0 0 ${width} ${width}`}
      width={`${width}px`}
      height={`${width}px`}
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
                <path
                  x={strokeWidth}
                  y={strokeWidth}
                  width={shapeWidth}
                  height={shapeWidth}
                  className='shape'
                  d="M25,4.47213595 L3.23606798,48 L46.763932,48 L25,4.47213595 Z"
                />
            </g>
        </g>
    </svg>
  );
}
