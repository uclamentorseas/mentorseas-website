// @flow

import * as React from 'react'
import Radium from 'radium'
import Shapes from 'components/Shapes'
import './FloatingShapes.scss'
import FloatingShape from './FloatingShape'

const FLOAT_SPEED_VARIANCE = 0.05
const MAX_USER_SHAPES_RATIO = 0.75

// Returns random value in range [from, to)
const randIntInRange = (from: number, to: number): number => {
  const range = to - from
  const randomValue = Math.floor(Math.random() * range)
  return randomValue + from
}

const getRandomShape = (): (() => React.Element<*>) => Shapes[randIntInRange(0, Shapes.length)]

type PropsType = {
  density: number,
  speed: number,
  shapeSize: number,
  allowClickShapes: boolean
}

type StateType = {
  containerWidth: number,
  containerHeight: number,
  shapeElements: Array<React.Element<*>>,
  resizing: boolean,
  numRenders: number
}

type ShapeOptionsType = {
  x?: number,
  y?: number,
  Shape?: React.Element<*>,
  size?: number,
  animationDuration?: number,
  creator?: string,
  key: string
}

class FloatingShapes extends React.Component<PropsType, StateType> {
  props: PropsType
  state: StateType
  container: ?HTMLDivElement
  onContainerClick: (event: SyntheticMouseEvent<*>) => void

  // --- React Lifecycle Methods --- //
  constructor(props: PropsType) {
    super(props)

    this.state = {
      containerWidth: this.container ? this.container.offsetWidth : 0,
      containerHeight: this.container ? this.container.offsetHeight : 0,
      shapeElements: [],
      resizing: false,
      // Required in order to keep Radium keyframes working
      numRenders: 0
    }

    this.onContainerClick = this.onContainerClick.bind(this)
  }

  componentDidMount() {
    this.adjustToResize()
    window.addEventListener('resize', this.adjustToResize.bind(this))
  }

  // --- Event Handlers --- //

  onContainerClick(clickEvent: SyntheticMouseEvent<HTMLDivElement>) {
    if (this.state.shapeElements.length >= this.getMaximumNumberOfShapes() || !this.props.allowClickShapes) {
      return
    }

    const containerRect = clickEvent.currentTarget.getBoundingClientRect()

    this.addShapeToView(
      this.createShape({
        x: clickEvent.clientX - containerRect.left,
        y: clickEvent.clientY - containerRect.top,
        creator: 'user',
        key: `user-shape-${this.state.shapeElements.length + 1}`
      })
    )
  }

  // --- Getter Methods --- //

  getContainerDimensions(): { width: number, height: number } {
    return {
      width: this.container ? this.container.offsetWidth : 0,
      height: this.container ? this.container.offsetHeight : 0
    }
  }

  getMaximumNumberOfShapes(): number {
    const initialCount = this.getNumberOfInitialShapes()
    return Math.floor(initialCount * (1 + MAX_USER_SHAPES_RATIO))
  }

  getNumberOfInitialShapes(): number {
    const windowArea = this.state.containerWidth * this.state.containerHeight
    const shapeArea = this.getShapeSize() ** 2
    return Math.ceil(windowArea / shapeArea * this.props.density)
  }

  getShapeSize(): number {
    return this.props.shapeSize * Math.max(this.state.containerWidth, this.state.containerHeight)
  }

  getRandomDuration(): number {
    const baseDuration = 1 / this.props.speed * this.state.containerWidth
    return randIntInRange(baseDuration * (1 - FLOAT_SPEED_VARIANCE), baseDuration * (1 + FLOAT_SPEED_VARIANCE))
  }

  getRandomScreenPosition(): { x: number, y: number } {
    return {
      x: randIntInRange(0, this.state.containerHeight),
      y: randIntInRange(0, this.state.containerWidth)
    }
  }

  getAppearBuffer(): number {
    return this.getShapeSize() / this.state.containerWidth * 1.2
  }

  getAnimationDelayFor(left: number, duration: number): number {
    const { containerWidth } = this.state
    const animationWidth = containerWidth * (1 + this.getAppearBuffer())
    const animationLeft = containerWidth * this.getAppearBuffer() + left
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

    const floatingShapeKeyframes = Radium.keyframes(
      {
        '0%': {
          left: `${0 - this.getAppearBuffer() * 100}%`,
          transform: 'rotate(0deg)'
        },
        '100%': {
          left: '100%',
          transform: 'rotate(360deg)'
        }
      },
      'floating-shape'
    )

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
    const checkDimensions = (width: number, height: number) => {
      const containerDims = this.getContainerDimensions()
      if (containerDims.width === width && containerDims.height === height) {
        this.setState(
          {
            resizing: false,
            containerWidth: containerDims.width,
            containerHeight: containerDims.height
          },
          () => {
            this.setState({ shapeElements: this.createInitialShapes() })
          }
        )
      }
    }

    this.setState({ resizing: true }, () => {
      // Check if innerWidth and innerHeight have stayed constant for some time
      const containerDims = this.getContainerDimensions()
      setTimeout(checkDimensions.bind(this, containerDims.width, containerDims.height), 300)
    })
  }

  createInitialShapes(): Array<React.Element<*>> {
    const numShapes = this.getNumberOfInitialShapes()
    const shapesToRender = []

    // First, determine all the shape locations using a stratified sample of
    // random coordinates
    const numHorizontalShapes = Math.ceil(Math.sqrt(this.state.containerWidth / this.state.containerHeight * numShapes))

    const numVerticalShapes = Math.ceil(Math.sqrt(this.state.containerHeight / this.state.containerWidth * numShapes))

    const columnSize = this.state.containerWidth / (numHorizontalShapes - 1)
    const rowSize = this.state.containerHeight / (numVerticalShapes - 1)

    const STRAY_FROM_CENTER = 0.5

    for (let i = 0; i < numHorizontalShapes; i += 1) {
      for (let j = 0; j < numVerticalShapes; j += 1) {
        const columnCenter = (i + 0.5) * columnSize
        const randX = randIntInRange(
          columnCenter - columnSize / 2 * STRAY_FROM_CENTER,
          columnCenter + columnSize / 2 * STRAY_FROM_CENTER
        )

        const rowCenter = (j + 0.5) * rowSize
        const randY = randIntInRange(
          rowCenter - rowSize / 2 * STRAY_FROM_CENTER,
          rowCenter + rowSize / 2 * STRAY_FROM_CENTER
        )

        shapesToRender.push(
          this.createShape({
            x: randX,
            y: randY,
            key: `shape-${this.state.numRenders}-${i}-${j}`
          })
        )
      }
    }

    this.setState({ numRenders: this.state.numRenders + 1 })
    return shapesToRender
  }

  createShape(options: ShapeOptionsType): React.Element<*> {
    const {
      x = this.getRandomScreenPosition().x,
      y = this.getRandomScreenPosition().y,
      Shape = getRandomShape(),
      size = this.getShapeSize(),
      animationDuration = this.getRandomDuration(),
      creator = 'automatic',
      key
    } = options

    // We want to spawn the shape so its CENTER is at the specified coordinates
    const [centerX, centerY] = [x - size / 2, y - size / 2]

    return (
      <FloatingShape
        key={key}
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
        {/* flow-disable-next-line */}
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
        className="floating-shapes"
        onClick={this.onContainerClick}
        ref={(div: ?HTMLDivElement) => {
          this.container = div
        }}
        role="presentation"
      >
        {!this.state.resizing && this.state.shapeElements}
      </div>
    )
  }
}

// flow-disable-next-line
FloatingShapes.defaultProps = {
  // 0: no shapes, 1: shapes fill screen
  density: 0.25,
  // Pixels/second measure of shape animation speed
  speed: 48,
  // Percentage of max(screenwidth, screenheight)
  shapeSize: 0.1,
  // Whether to allow new shapes to be created via user clicks
  allowClickShapes: true
}

export default Radium(FloatingShapes)
