// @flow

import * as React from 'react'
import './SectionHeader.scss'

type PropsType = {
  title: string
};

export default (props: PropsType): React.Element<*> => (
  <div className='section-header'>
    <h1>{props.title}</h1>
  </div>
)
