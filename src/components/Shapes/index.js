// @flow

import Square from './Square'
import Triangle from './Triangle'
import Circle from './Circle'
import Cross from './Cross'
import Squiggle from './Squiggle'

export type ShapesListType = Array<React.Element<*>>;

const shapes: ShapesListType = [
  Square,
  Triangle,
  Circle,
  Cross,
  Squiggle
]

export default shapes
