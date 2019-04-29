// @flow

import * as React from 'react'
import header from '/pages/StaffPage/images/header.svg'
import './PageHeader.scss'

export default (): React.Element<*> => (
  <div className="page-header">
    <div className="title">
      <div className="title-header">
        <img className="page-header-img" alt="page header img" src={header} />
      </div>
    </div>
  </div>
)
