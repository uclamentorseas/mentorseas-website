import React from 'react';
import './Square.scss';

export default function Square(props) {
  
  const width = props.width;
  const strokeWidth = width * 0.1;
  const shapeWidth = width - (2 * strokeWidth);

  return (
    <svg
      className='square'
      viewBox='0 0 50 50'
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
