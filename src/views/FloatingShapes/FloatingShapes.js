import React from 'react';

import './FloatingShapes.scss';
import ShapesList from 'components/Shapes';
import FloatingShape from './FloatingShape';

// Pixels/second measure, based on 20 second-traversal on a 1280px screen
const FLOAT_SPEED = 64;

// Range of speeds from FLOAT_SPEED for randomization
const MIN_FLOAT_SPEED_FACTOR = 0.85;
const MAX_FLOAT_SPEED_FACTOR = 1.15;

// Proportional to fitting 15 shapes on a 1280px window
// Ends up being 4 shapes on an iPhone 6
const NUM_SHAPES = Math.floor(window.innerWidth / (1280/15));

// Number of seconds between shape spawns
const DELAY_FACTOR = 4;

const SHAPE_SIZE = 100;

const randInt = range => Math.floor(Math.random() * range);
const randIntInRange = (from, to) => randInt(to - from) + from;

// Important note:
// This component currently is not fully responsive, meaning that although
// it will adust number of shapes and speed for screen sizes, it only does
// this on page load, not on resize.

export default function FloatingShapes(props) {

  let shapesToRender = [];
  for (let i = 0; i < NUM_SHAPES; i++) {

    const Shape = ShapesList[Math.floor(Math.random() * ShapesList.length)];
    const top = randInt(window.innerHeight);
    const delay = i * DELAY_FACTOR;
    const baseDuration = (1 / FLOAT_SPEED) * window.innerWidth;
    const duration = randIntInRange(
      baseDuration * MIN_FLOAT_SPEED_FACTOR,
      baseDuration * MAX_FLOAT_SPEED_FACTOR
    );

    // Unavoidable use case of JS-injected styles
    const shapeStyles = {
      top: `${top}px`,
      left: '-100%',
      animation: `floating-shape ${duration}s linear ${delay}s infinite none running`,
    }

    shapesToRender.push(
      <FloatingShape key={`shape-${i}`} style={shapeStyles}>
        <Shape size={SHAPE_SIZE} />
      </FloatingShape>
      );
  }

  return (
    <div className='floating-shapes-wrapper'>
      <div className='floating-shapes'>
        {shapesToRender}
      </div>
    </div>
  );
}
