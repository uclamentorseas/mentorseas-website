// @flow

import * as React from 'react'
import './StaffImage.scss'

type PropsType = {
  images: MemberDataImagesType
};

export default (props: PropsType): React.Element<*> => (
  <div className='staff-image'>
    <img src={props.images.regular} alt='staff-member-static' />
  </div>
)
