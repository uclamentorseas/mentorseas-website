// @flow

import * as React from 'react'
import './Card.scss'

type PropsType = {
  name: string,
  images: OrganizationsDataImagesType,
  link: string
}

export default (props: PropsType): React.Element<*> => (
  <div className="card">
    <a target="_blank" href={props.link}>
      <img className="card-img" src={props.images.regular} alt="org" />
    </a>
    <div className="card-name">{props.name}</div>
  </div>
)
