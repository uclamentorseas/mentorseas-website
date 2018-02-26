// @flow

import * as React from 'react'
import './Card.scss'

type PropsType = {
  name: string,
  images: string,
  link: string
};

export default (props: PropsType): React.Element<*> => {
  const majorColors: { [string]: { bg: string, text: string } } = {
    'CSEE': { bg: '#293d59', text: '#ffffff' },
    'Mechanical Engineering': { bg: '#0093AF', text: '#ffffff' },
    Bioengineering: { bg: '#4786a4', text: '#ffffff' },
    'Chemical Engineering': { bg: '#6ea9a1', text: '#ffffff' },
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
    <div className='card'>
      <a target='_blank' href={props.link}>
        <img className='card-img' src={props.images.regular} />
      </a>
      <div className='card-name' style={styles}>{props.name}</div>
    </div>
  )
}
