import React from 'react';

import './Logo.scss';

export default function Logo(props) {
  const width = props.size;
  const strokeWidth = width * 0.04;
  const shapeWidth = width - (2 * strokeWidth);
  const fontSize = shapeWidth / 4;

  return (
    <svg
      className='logo'
      width={width}
      height={width}
      viewBox={`0 0 ${width} ${width}`}
    >
      <g className='fill' fill='none'>
        <g className='stroke' strokeWidth={strokeWidth}>
          <rect
            className='shape'
            x={strokeWidth}
            y={strokeWidth}
            width={shapeWidth}
            height={shapeWidth}
          />
        </g>
      </g>

      <g className='text'>
        <text
          className='mentor-text'
          x={strokeWidth + 10}
          y={width / 2 + fontSize - 10}
          fontSize={fontSize}
        >
          mentor
        </text>
        <text
          className='SEAS-text'
          x={strokeWidth + 10}
          y={width / 2 + (2 * fontSize) - 15}
          fontSize={fontSize}
        >
          SEAS
        </text>
      </g>

    </svg>

  );
}
