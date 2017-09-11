// @flow

import * as React from 'react'
import './StaffMajor.scss'

type PropsType = {
  major: string
};

export default (props: PropsType): React.Element<*> => {
  const majorColors = {
    'Computer Science': '#293d59',
    'Mechanical Engineering': '#0093AF',
    Bioengineering: '#4786a4',
    'Chemical Engineering': '#6ea9a1',
    'CS & E': '#1D2951',
    'C & EE': '#89CFF0',
    'Electrical Engineering': '#9dc699',
    'Aerospace Engineering': '#203b6a'
  }

  const styles = {
    backgroundColor: majorColors[props.major]
  }

  return (
    <div className='staff-major' style={styles}>
      {props.major}
    </div>
  )
}
