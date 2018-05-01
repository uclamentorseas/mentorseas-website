// @flow

import * as React from 'react'

import FloatingShapes from 'views/FloatingShapes'
import './SectionHeader.scss'

type PropsType = {
  title: string,
  allowClickShapes: boolean,
  background: string
}

export default (props: PropsType): React.Element<*> => (
  <div className="section-header">
    <div className="floating-shapes-wrapper" style={{ background: props.background }}>
      <FloatingShapes allowClickShapes={props.allowClickShapes} />
    </div>
    <div className="section-header-title">
      <h1>{props.title}</h1>
    </div>
  </div>
)
