// @flow

import React from 'react'
import alternateLogo from './alternate-logo.png'

export default (): React.Element<*> => (
  <img
    className='alternate-logo'
    src={alternateLogo}
    alt='alternate logo'
  />
)
