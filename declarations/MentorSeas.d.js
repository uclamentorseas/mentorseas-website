// @flow

/* eslint-disable */

import * as React from 'react'

declare var window: any

type ShapeProps = {
  size: number
}

type PageType = {
  path: string,
  exactPath: boolean,
  name: string,
  component: React.Element<*>
}

type TitledParagraphsType = {
  title?: string,
  subtitle?: string,
  paragraphs: Array<string>
}
