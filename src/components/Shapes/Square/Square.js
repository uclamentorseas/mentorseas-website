import React from 'react';
import './Square.scss';

export default function Square(props) {
  return (
    <svg
      className='square'
      viewBox='0 0 50 50'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g className='fill'>
          <g className='stroke'>
              <rect className='shape'></rect>
          </g>
      </g>
    </svg>
  );
}
