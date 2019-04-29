// @flow

import * as React from 'react'
import '/scss/fa/font-awesome.scss'
import './SocialIcons.scss'

export default (): React.Element<*> => (
  <div className="social-icons">
    <div className="icon-wrapper">
      <a href="https://www.facebook.com/mentorSEAS">
        <i className="fa fa-facebook fa-2x" />
      </a>
    </div>
    <div className="icon-wrapper">
      <a href="https://www.github.com/uclamentorseas/">
        <i className="fa fa-github fa-2x" />
      </a>
    </div>
  </div>
)
