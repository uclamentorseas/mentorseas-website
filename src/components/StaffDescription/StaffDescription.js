// @flow

import * as React from 'react'
import './StaffDescription.scss'

type PropsType = {
  position: string,
  involvement: string,
  restaurant: string,
  links: Array<string>,
  onClick: () => void
};

export default (props: PropsType): React.Element<*> => {
  const {
    position,
    involvement,
    restaurant,
    // description,
    links,
    onClick
  } = props

  const facebook = links.facebook ? (<div className='icon-wrapper'>
    <a target='_blank' href={links.facebook}>
      <i className='fa fa-facebook fa-2x' />
    </a>
  </div>) : null

  const linkedin = links.linkedin ? (<div className='icon-wrapper'>
    <a target='_blank' href={links.linkedin}>
      <i className='fa fa-linkedin fa-2x' />
    </a>
  </div>) : null

  const github = links.github ? (<div className='icon-wrapper'>
    <a target='_blank' href={links.github}>
      <i className='fa fa-github fa-2x' />
    </a>
  </div>) : null

  const email = links.email ? (<div className='icon-wrapper'>
    <a href={links.email}>
      <i className='fa fa-envelope fa-2x' />
    </a>
  </div>) : null

  const personal = links.personal ? (<div className='icon-wrapper'>
    <a target='_blank' href={links.personal}>
      <i className='fa fa-id-card-o fa-2x' />
    </a>
  </div>) : null

  return (
    <div className='staff-description'>
      <button className='close-button' onClick={onClick} />
      <div className='staff-description-block'>
        <span className='block-title'>Position:</span>
        <span className='block-content'>{position}</span>
      </div>

      <div className='staff-description-block'>
        <span className='block-title'>Involvement:</span>
        <span className='block-content'>{involvement}</span>
      </div>

      <div className='staff-description-block'>
        <span className='block-title'>Favorite Restaurant in Westwood:</span>
        <span className='block-content'>{restaurant}</span>
      </div>

      <div className='staff-description-links'>
        {facebook}
        {linkedin}
        {github}
        {personal}
        {email}
      </div>
    </div>
  )
}
