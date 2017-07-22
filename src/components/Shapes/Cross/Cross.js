import React from 'react';
import constants from '../constants';
import './Cross.scss';

export default function Cross(props) {

  const { STROKE_WIDTH_FACTOR } = constants;

  const Point = (x, y) => ({ x: x, y: y });

  const length = props.size;
  const strokeWidth = length * STROKE_WIDTH_FACTOR;
  const strokeWidthRoot2 = strokeWidth * Math.sqrt(2);
  const halfLength = length / 2;

  const points = [
    Point(strokeWidthRoot2, 2 * strokeWidthRoot2),
    Point(2 * strokeWidthRoot2, strokeWidthRoot2),
    Point(halfLength, halfLength - strokeWidthRoot2),
    Point(length -  2 * strokeWidthRoot2, strokeWidthRoot2),
    Point(length - strokeWidthRoot2, 2 * strokeWidthRoot2),
    Point(halfLength + strokeWidthRoot2, halfLength),
    Point(length - strokeWidthRoot2, length - 2 * strokeWidthRoot2),
    Point(length - (2 * strokeWidthRoot2), length - strokeWidthRoot2),
    Point(halfLength, halfLength + strokeWidthRoot2),
    Point(2 * strokeWidthRoot2, length - strokeWidthRoot2),
    Point(strokeWidthRoot2, length - 2 * strokeWidthRoot2),
    Point(halfLength - strokeWidthRoot2, halfLength)
  ];

  let crossPath = `M${points[0].x},${points[0].y} `;
  points.slice(1).forEach(point => {
    crossPath = crossPath.concat(` L${point.x},${point.y}`);
  });
  crossPath = crossPath.concat(' Z');

  return (
    <svg
      className='cross shape'
      viewBox={`0 0 ${length} ${length}`}
      width={`${length}px`}
      height={`${length}px`}
      xmlns='http://www.w3.org/2000/svg'
    >
      <g className='fill' fill='none'>
        <g className='stroke' strokeWidth={strokeWidth}>
            <path d={crossPath}/>
        </g>
      </g>
    </svg>
  );
}
