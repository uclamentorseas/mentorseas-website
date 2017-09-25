// @flow

import * as React from 'react'
import './StaffMajor.scss'

type PropsType = {
  major: string
};

export default (props: PropsType): React.Element<*> => {
  const majorColors: { [string]: { bg: string, text: string } } = {
    'Computer Science': { bg: '#293d59', text: '#ffffff' },
    'Mechanical Engineering': { bg: '#0093AF', text: '#ffffff' },
    Bioengineering: { bg: '#4786a4', text: '#ffffff' },
    'Chemical Engineering': { bg: '#6ea9a1', text: '#ffffff' },
    'CS & E': { bg: '#1D2951', text: '#ffffff' },
    'C & EE': { bg: '#89CFF0', text: '#ffffff' },
    'Electrical Engineering': { bg: '#9dc699', text: '#ffffff' },
    'Aerospace Engineering': { bg: '#203b6a', text: '#ffffff' },
    default: { bg: '#FFFFFF', text: '#333333' }
  }

  const styles = {
    backgroundColor: majorColors[props.major] ?
      majorColors[props.major].bg :
      majorColors.default.bg,
    color: majorColors[props.major] ?
      majorColors[props.major].text :
      majorColors.default.text
  }

  return (
    <div className='staff-major' style={styles}>
      {props.major}
    </div>
  )
}
