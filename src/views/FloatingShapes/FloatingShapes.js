// @flow

import React from 'react'
import Radium from 'radium'
import Shapes from 'components/Shapes'
import './FloatingShapes.scss'
import FloatingShape from './FloatingShape'

// Pixels/second measure of shape animation speed
const FLOAT_SPEED = 48
const FLOAT_SPEED_VARIANCE = 0.05

// 0: no shapes,
// 1: enough shapes to completely fill the screen if placed side-by-side
const SHAPES_DENSITY = 0.25

// Percentage of max(screenwidth, screenheight)
const SHAPE_SIZE_FACTOR = 0.1

// Multiple of initial number of shapes that may be added via user clicks
const MAX_USER_SHAPES_RATIO = 0.75

// Number of milliseconds to wait before spawning shapes after resize
const RESIZE_WAIT_TIME = 300

// Returns random value in range [from, to)
const randIntInRange = (from: number, to: number): number => {
  const range = to - from
  const randomValue = Math.floor(Math.random() * range)
  return randomValue + from
}

function getRandomShape(): React.Element<*> {
  return Shapes[randIntInRange(0, Shapes.length)]
}

type PropsType = {};

type ShapeOptionsType = {
  x?: number,
  y?: number,
  Shape?: React.Element<*>,
  size?: number,
  animationDuration?: number,
  creator: string
};

class FloatingShapes extends React.Component {
  // --- React Lifecycle Methods --- //
  constructor(props: PropsType) {
    super(props)

    this.state = {
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
      shapeElements: [],
      resizing: false
    }

    this.onContainerClick = this.onContainerClick.bind(this)
  }

  componentWillMount() {
    window.addEventListener('resize', this.adjustToResize.bind(this))
    this.setState({ shapeElements: this.createInitialShapes() })
  }

  // --- Event Handlers --- //

  onContainerClick(clickEvent: SyntheticEvent) {
    if (this.state.shapeElements.length > this.getMaximumNumberOfShapes()) {
      return
    }

    this.addShapeToView(this.createShape({
      x: clickEvent.nativeEvent.offsetX,
      y: clickEvent.nativeEvent.offsetY,
      creator: 'user'
    }))
  }

  // --- Getter Methods --- //

  getMaximumNumberOfShapes(): number {
    const initialCount = this.getNumberOfInitialShapes()
    return Math.floor(initialCount * (1 + MAX_USER_SHAPES_RATIO))
  }

  getNumberOfInitialShapes(): number {
    const windowArea = this.state.windowWidth * this.state.windowHeight
    const shapeArea = this.getShapeSize() ** 2
    return Math.ceil((windowArea / shapeArea) * SHAPES_DENSITY)
  }

  getShapeSize(): number {
    return SHAPE_SIZE_FACTOR *
      Math.max(this.state.windowWidth, this.state.windowHeight)
  }

  getRandomDuration(): number {
    const baseDuration = (1 / FLOAT_SPEED) * this.state.windowWidth
    return randIntInRange(
      baseDuration * (1 - FLOAT_SPEED_VARIANCE),
      baseDuration * (1 + FLOAT_SPEED_VARIANCE)
    )
  }

  getRandomScreenPosition(): { top: number, left: number } {
    return {
      top: randIntInRange(0, this.state.windowHeight),
      left: randIntInRange(0, this.state.windowWidth)
    }
  }

  getAppearBuffer(): number {
    return (this.getShapeSize() / this.state.windowWidth) * 1.2
  }

  getAnimationDelayFor(left: number, duration: number): number {
    const { windowWidth } = this.state
    const animationWidth = windowWidth * (1 + this.getAppearBuffer())
    const animationLeft = (windowWidth * this.getAppearBuffer()) + left
    return -(animationLeft / animationWidth) * duration
  }

  getShapeStyles(options: {
    x: number,
    y: number,
    animationDuration: number,
    animationDelay: number
  }): {
    top: string,
    left: string,
    animation: string,
    animationName: any, // eslint-disable-line
    transformOrigin: string
  } {
    const { x, y, animationDuration, animationDelay } = options

    const floatingShapeKeyframes = Radium.keyframes({
      '0%': {
        left: `${0 - (this.getAppearBuffer() * 100)}%`,
        transform: 'rotate(0deg)'
      },
      '100%': {
        left: '100%',
        transform: 'rotate(360deg)'
      }
    }, 'floating-shape')

    return {
      top: `${y}px`,
      left: `${x}px`,
      animation: `x ${animationDuration}s linear ${animationDelay}s infinite none running`,
      animationName: floatingShapeKeyframes,
      transformOrigin: 'center'
    }
  }

  // --- Modification Methods --- //

  adjustToResize() {
    this.setState({ resizing: true })

    const checkDimensions = (width: number, height: number) => {
      if (window.innerWidth === width && window.innerHeight === height) {
        this.setState({
          resizing: false,
          windowWidth: window.innerWidth,
          windowHeight: window.innerHeight
        }, () => {
          // Only create initial shapes once window dimensions in state
          // have been updated
          this.setState({ shapeElements: this.createInitialShapes() })
        })
      }
    }

    // Check if innerWidth and innerHeight have stayed constant for some time
    setTimeout(
      checkDimensions.bind(null, window.innerWidth, window.innerHeight),
      RESIZE_WAIT_TIME
    )
  }

  createInitialShapes(): Array<React.Element<*>> {
    const numShapes = this.getNumberOfInitialShapes()
    const shapesToRender = []

    // First, determine all the shape locations using a stratified sample of
    // random coordinates
    const numHorizontalShapes = Math.ceil(
      Math.sqrt(
        (this.state.windowWidth / this.state.windowHeight) * numShapes
      )
    )

    const numVerticalShapes = Math.ceil(
      Math.sqrt(
        (this.state.windowHeight / this.state.windowWidth) * numShapes
      )
    )

    const columnSize = this.state.windowWidth / (numHorizontalShapes - 1)
    const rowSize = this.state.windowHeight / (numVerticalShapes - 1)

    const STRAY_FROM_CENTER = 0.5

    for (let i = 0; i < numHorizontalShapes; i += 1) {
      for (let j = 0; j < numVerticalShapes; j += 1) {
        const columnCenter = (i + 0.5) * columnSize
        const randX = randIntInRange(
          columnCenter - ((columnSize / 2) * STRAY_FROM_CENTER),
          columnCenter + ((columnSize / 2) * STRAY_FROM_CENTER)
        )

        const rowCenter = (j + 0.5) * rowSize
        const randY = randIntInRange(
          rowCenter - ((rowSize / 2) * STRAY_FROM_CENTER),
          rowCenter + ((rowSize / 2) * STRAY_FROM_CENTER)
        )

        shapesToRender.push(this.createShape({
          x: randX,
          y: randY
        }))
      }
    }

    return shapesToRender
  }

  createShape(options: ShapeOptionsType): React.Element<*> {
    const {
      x = this.getRandomScreenPosition().x,
      y = this.getRandomScreenPosition().y,
      Shape = getRandomShape(),
      size = this.getShapeSize(),
      animationDuration = this.getRandomDuration(),
      creator = 'automatic'
    } = options

    // We want to spawn the shape so its CENTER is at the specified coordinates
    const [centerX, centerY] = [x - (size / 2), y - (size / 2)]

    return (
      <FloatingShape
        key={`(${x}, ${y})`}
        style={this.getShapeStyles({
          x: centerX,
          y: centerY,
          animationDuration,
          animationDelay: this.getAnimationDelayFor(centerX, animationDuration)
        })}
        className={`
          floating-shape
          creator-${creator}
          ${Math.random() > 0.5 ? 'color-1' : 'color-2'}
        `}
      >
        <Shape size={size} />
      </FloatingShape>
    )
  }

  addShapeToView(shape: React.Element<*>) {
    if (this.state.shapeElements.length <= this.getMaximumNumberOfShapes()) {
      this.setState({
        shapeElements: this.state.shapeElements.concat([shape])
      })
    }
  }

  render(): React.Element<*> {
    return (
      <div
        className='floating-shapes'
        onClick={this.onContainerClick}
        role='presentation'
      >
        { !this.state.resizing && this.state.shapeElements }
      </div>
    )
  }
}

export default Radium(FloatingShapes)
