// @flow

import * as React from 'react'
import './StaffName.scss'

type PropsType = {
  name: string
};

export default (props: PropsType): React.Element<*> => (
  <div className='staff-name'>
    {props.name}
  </div>
)
