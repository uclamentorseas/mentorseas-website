import React from 'react';
import Radium from 'radium';
import './FloatingShapes.scss';
import ShapesList from 'components/Shapes';
import FloatingShape from './FloatingShape';

// Pixels/second measure, based on 20 second-traversal on a 1280px screen
const FLOAT_SPEED = 64;

// Range of speeds from FLOAT_SPEED for randomization
const MIN_FLOAT_SPEED_FACTOR = 0.85;
const MAX_FLOAT_SPEED_FACTOR = 1.15;

// 0: no shapes,
// 1: enough shapes to completely fill the screen if placed side-by-side
const SHAPES_DENSITY = 0.2;

// Width of initial-spawn shapes
const SHAPE_SIZE = 100;

// How much larger/smaller the user-clicked shapes are than spawn shapes
const CLICKED_SHAPE_SIZE_FACTOR = 0.5;

// How far from the sides of the component the shapes will come in from and
// go out to
const DISAPPEAR_BUFFER = 0.1;

// Multiple of initial number of shapes that may be added via user clicks
const MAX_USER_SHAPES_RATIO = 1.0;

// Number of milliseconds to wait before spawning shapes after resize
const RESIZE_WAIT_TIME = 300;

// Returns random value in range [from, to)
const randIntInRange = (from, to) => {
  const range = to - from;
  const randomValue = Math.floor(Math.random() * range);
  return randomValue + from;
}

class FloatingShapes extends React.Component {

  // --- React Lifecycle Methods --- //
  constructor(props) {
    super(props);
    this.state = {
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
      shapeElements: [],
      resizing: false,
    }

    this.floatingShapeKeyframes = Radium.keyframes({
      '0%': {
        left: `${0 - (DISAPPEAR_BUFFER * 100)}%`,
        transform: 'rotate(0deg)'
      },
      '100%': {
        left: `${100 + (DISAPPEAR_BUFFER * 100)}%`,
        transform: 'rotate(360deg)'
      }
    }, 'floating-shape');
  }

  componentWillMount() {
    window.addEventListener('resize', this.adjustToResize.bind(this));
    this.setState({ shapeElements: this.createInitialShapes() });
  }

  // --- Getter Methods --- //

  getMaximumNumberOfShapes() {
    const initialCount = this.getNumberOfInitialShapes();
    return Math.floor(initialCount * (1 + MAX_USER_SHAPES_RATIO));
  }

  getNumberOfInitialShapes() {
    const windowArea = this.state.windowWidth * this.state.windowHeight;
    const shapeArea = Math.pow(this.getShapeSize(), 2);
    return (windowArea / shapeArea) * SHAPES_DENSITY;
  }

  getShapeSize() {
    return SHAPE_SIZE;
  }

  getRandomShape() {
    return ShapesList[randIntInRange(0, ShapesList.length)];
  }

  getRandomDuration() {
    const baseDuration = (1 / FLOAT_SPEED) * this.state.windowWidth;
    return randIntInRange(
      baseDuration * MIN_FLOAT_SPEED_FACTOR,
      baseDuration * MAX_FLOAT_SPEED_FACTOR
    );
  }

  getRandomScreenPosition() {
    return {
      top: randIntInRange(0, this.state.windowHeight),
      left: randIntInRange(0, this.state.windowWidth)
    }
  }

  getAnimationDelayFor(left, duration) {
    const animationWidth = this.state.windowWidth * (1 + (2 * DISAPPEAR_BUFFER));
    const animationLeft = (this.state.windowWidth * DISAPPEAR_BUFFER) + left;
    return -(animationLeft / animationWidth) * duration;
  }

  // --- Modification Methods --- //

  adjustToResize() {
    this.setState({
      resizing: true,
    });

    const checkDimensions = (width, height) => {
      if (window.innerWidth === width && window.innerHeight === height) {
        this.setState({
          resizing: false,
          windowWidth: window.innerWidth,
          windowHeight: window.innerHeight,
          shapeElements: this.createInitialShapes()
        });
      }
    }

    // Check if innerWidth and innerHeight have stayed constant for X seconds
    setTimeout(checkDimensions.bind(null, window.innerWidth, window.innerHeight), RESIZE_WAIT_TIME);
  }

  createInitialShapes() {
    const numShapes = this.getNumberOfInitialShapes();
    let shapesToRender = [];
    for (let i = 0; i < numShapes; i++) {
      shapesToRender.push(this.createRandomFloatingShape());
    }
    return shapesToRender;
  }

  createRandomFloatingShape() {
    const shapeSize = this.getShapeSize();
    const RandomShape = this.getRandomShape();
    const { top, left } = this.getRandomScreenPosition();
    const duration = this.getRandomDuration();
    const delay = this.getAnimationDelayFor(left, duration);

    // Unavoidable use case of JS-injected styles
    const shapeStyles = {
      top: `${top}px`,
      left: `${left}px`,
      animation: `x ${duration}s linear ${delay}s infinite none running`,
      animationName: this.floatingShapeKeyframes
    }

    return (
      <FloatingShape
        key={`${Math.random()}`}
        style={shapeStyles}
      >
        <RandomShape size={shapeSize} />
      </FloatingShape>
    );
  }

  createShapeWhereClicked(clickEvent) {

    if (this.state.shapeElements.length > this.getMaximumNumberOfShapes()) {
      return;
    }

    const { pageX, pageY } = clickEvent;
    const shapeSize = this.getShapeSize() * CLICKED_SHAPE_SIZE_FACTOR;
    const RandomShape = this.getRandomShape();
    const duration = this.getRandomDuration()
    const delay = this.getAnimationDelayFor(pageX, duration);

    // Unavoidable use case of JS-injected styles
    const shapeStyles = {
      top: `${pageY}px`,
      left: `${pageX}px`,
      animation: `x ${duration}s linear ${delay}s infinite none running`,
      animationName: this.floatingShapeKeyframes
    }

    const newShape = (
      <FloatingShape
        key={`${Math.random()}`}
        style={shapeStyles}
        className={'floating-shape from-user-click'}
      >
        <RandomShape size={shapeSize} />
      </FloatingShape>
    );

    this.addShapeToView(newShape);
  }

  addShapeToView(shape) {
    if (this.state.shapeElements.length <= this.getMaximumNumberOfShapes()) {
      const newShapes = this.state.shapeElements.slice(0);
      newShapes.push(shape);
      this.setState({ shapeElements: newShapes });
    }
  }

  render() {
    return (
      <div className='floating-shapes-wrapper'>
        <div className='floating-shapes' onClick={this.createShapeWhereClicked.bind(this)}>
          { !this.state.resizing && this.state.shapeElements }
        </div>
      </div>
    );
  }
}

export default Radium(FloatingShapes);
