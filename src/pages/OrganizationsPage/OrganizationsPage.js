// @flow

import * as React from 'react'

import SectionHeader from 'components/SectionHeader'
import OrganizationsSection from 'components/OrganizationsSection'
import './OrganizationsPage.scss'

export default (): React.Element<*> => (
  <div className="org-page page">
    <div className="org-header">
      <SectionHeader allowClickShapes={false} title="Engineering Organizations" background={'black'} />
    </div>
    <div className="org-container">
      <OrganizationsSection />
    </div>
  </div>
)
