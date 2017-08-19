import React from 'react';
import Radium from 'radium';
import './FloatingShapes.scss';
import Shapes from 'components/Shapes';
import FloatingShape from './FloatingShape';

// Pixels/second measure of shape animation speed
const FLOAT_SPEED = 48;

// Range of speeds from FLOAT_SPEED for randomization
const MIN_FLOAT_SPEED_FACTOR = 0.85;
const MAX_FLOAT_SPEED_FACTOR = 1.15;

// 0: no shapes,
// 1: enough shapes to completely fill the screen if placed side-by-side
const SHAPES_DENSITY = 0.25;

// Percentage of max(screenwidth, screenheight)
const SHAPE_SIZE_FACTOR = 0.15

// How much larger/smaller the user-clicked shapes are than spawn shapes
const CLICKED_SHAPE_SIZE_FACTOR = 0.5;

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
      resizing: false
    }

    this.floatingShapeKeyframes = Radium.keyframes({
      '0%': {
        left: `${0 - (this.getDisappearBuffer() * 100)}%`,
        transform: 'rotate(0deg)'
      },
      '100%': {
        left: `${100 + (this.getDisappearBuffer() * 100)}%`,
        transform: 'rotate(360deg)'
      }
    }, 'floating-shape');
  }

  componentWillMount() {
    window.addEventListener('resize', this.adjustToResize.bind(this));
    this.setState({ shapeElements: this.createInitialShapes() });
  }

  // --- Event Handlers --- //

  addShapeWhereClicked(clickEvent) {

    if (this.state.shapeElements.length > this.getMaximumNumberOfShapes()) {
      return;
    }

    this.addShapeToView(this.createShape({
      x: clickEvent.pageX,
      y: clickEvent.pageY,
      creator: 'user'
    }));
  }

  // --- Getter Methods --- //

  getMaximumNumberOfShapes() {
    const initialCount = this.getNumberOfInitialShapes();
    return Math.floor(initialCount * (1 + MAX_USER_SHAPES_RATIO));
  }

  getNumberOfInitialShapes() {
    const windowArea = this.state.windowWidth * this.state.windowHeight;
    const shapeArea = Math.pow(this.getShapeSize(), 2);
    return Math.ceil((windowArea / shapeArea) * SHAPES_DENSITY);
  }

  getShapeSize() {
    return SHAPE_SIZE_FACTOR * Math.max(this.state.windowWidth, this.state.windowHeight);
  }

  getRandomShape() {
    return Shapes[randIntInRange(0, Shapes.length)];
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

  getDisappearBuffer() {
    return (this.getShapeSize() / this.state.windowWidth) * 1.2;
  }

  // Takes (required) options: x, y, animationDuration, animationDelay
  createShapeStyles(options) {

    const { x, y, animationDuration, animationDelay } = options;

    return {
      top: `${y}px`,
      left: `${x}px`,
      animation: `x ${animationDuration}s linear ${animationDelay}s infinite none running`,
      animationName: this.floatingShapeKeyframes
    };
  }

  getAnimationDelayFor(left, duration) {
    const animationWidth = this.state.windowWidth * (1 + (2 * this.getDisappearBuffer()));
    const animationLeft = (this.state.windowWidth * this.getDisappearBuffer()) + left;
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

    // First, determine all the shape locations using a stratified sample of
    // random coordinates
    const numHorizontalShapes = Math.ceil(
      Math.sqrt(
        (this.state.windowWidth / this.state.windowHeight) * numShapes
      )
    );

    const numVerticalShapes = Math.ceil(
      Math.sqrt(
        (this.state.windowHeight / this.state.windowWidth) * numShapes
      )
    );

    const columnSize = this.state.windowWidth / (numHorizontalShapes - 1);
    const rowSize = this.state.windowHeight / (numVerticalShapes - 1);

    for (let i = 0; i < numHorizontalShapes; i++) {
      for (let j = 0; j < numVerticalShapes; j++) {
        const randX = randIntInRange(i * columnSize, (i+1) * columnSize);
        const randY = randIntInRange(j * rowSize, (j+1) * rowSize);
        shapesToRender.push(this.createShape({
          x: randX,
          y: randY
        }));
      }
    }
    return shapesToRender;
  }

  // Takes the following options:
  // x, y, size, shape, duration, creator
  createShape(options) {

    const {
      x = this.getRandomScreenPosition().x,
      y = this.getRandomScreenPosition().y,
      Shape = this.getRandomShape(),
      size = this.getShapeSize(),
      animationDuration = this.getRandomDuration(),
      creator = 'automatic'
    } = options;

    return (
      <FloatingShape
        key={`(${x}, ${y})`}
        style={this.createShapeStyles({
          x: x,
          y: y,
          animationDuration: animationDuration,
          animationDelay: this.getAnimationDelayFor(x, animationDuration)
        })}
        className={`floating-shape ${creator}`}
      >
        <Shape size={size} />
      </FloatingShape>
    );
  }

  addShapeToView(shape) {
    if (this.state.shapeElements.length <= this.getMaximumNumberOfShapes()) {
      this.setState({
        shapeElements: this.state.shapeElements.concat([shape])
      });
    }
  }

  render() {
    return (
      <div
        className='floating-shapes'
        onClick={this.addShapeWhereClicked.bind(this)}
      >
        { !this.state.resizing && this.state.shapeElements }
      </div>
    );
  }
}

export default Radium(FloatingShapes);
