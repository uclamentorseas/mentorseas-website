// @flow

import * as React from 'react'
import './PageHeader.scss'

export default (): React.Element<*> => (
  <div className="page-header">
    <div className="title">
      <div className="title-header">
        <img className="page-header-img" alt="page header img" src="/member-images/header.svg" />
      </div>
    </div>
  </div>
)
