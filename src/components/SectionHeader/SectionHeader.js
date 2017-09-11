// @flow

import * as React from 'react'
import header from 'pages/StaffPage/images/header.svg'
import './SectionHeader.scss'

type PropsType = {
  subtitle: string
};

export default (props: PropsType): React.Element<*> => (
  <div className='section-header'>
    <div className='title'>
      <div className='title-header'>
        <img className='staff-header' alt='staff header' src={header} width='100%' />
      </div>
    </div>
    <div className='subtitle'>
      {props.subtitle}
    </div>
  </div>
)
