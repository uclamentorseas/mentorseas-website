import React from 'react';
import './Square.scss';

export default function Square(props) {

  const width = props.size;
  const strokeWidth = width * 0.05;
  const shapeWidth = width - (2 * strokeWidth);

  return (
    <svg
      className='square'
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
              <rect
                className='shape'
                x={strokeWidth}
                y={strokeWidth}
                width={shapeWidth}
                height={shapeWidth}
              />
          </g>
      </g>
    </svg>
  );
}
