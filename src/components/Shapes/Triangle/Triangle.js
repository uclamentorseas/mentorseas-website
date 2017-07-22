import React from 'react';

import './Triangle.scss';

export default function Triangle(props) {

  const length = props.size;
  const strokeWidth = length * 0.05;

  const root5 = Math.sqrt(5);

  const x1 = 0.5 * length;
  const y1 = strokeWidth * root5;

  const x2 = length - ((strokeWidth * (1 + root5)) / 2);
  const y2 = length - strokeWidth;

  const x3 = ((strokeWidth * (1 + root5)) / 2);
  const y3 = length - strokeWidth;


  // Need to actually do some more complex trig calculations for this value

  return (
    <svg
      className='triangle'
      viewBox={`0 0 ${length} ${length}`}
      width={`${length}px`}
      height={`${length}px`}
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
                  className='shape'
                  d={`M${x1},${y1} L${x2},${y2} L${x3},${y3} L${x1},${y1} Z`}
                />
            </g>
        </g>
    </svg>
  );
}
