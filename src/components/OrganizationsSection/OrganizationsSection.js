// @flow

import * as React from 'react'

import organizations from 'components/OrganizationsData'
import Card from 'components/Card'
import './OrganizationsSection.scss'

export default (): React.Element<*> => {
  const {
    ALL, // all orgs
    CSEE, // CS and EE
    ME // Mechanical Engineering
  } = organizations

  // console.log(computerScience)
  // console.log((computerScience.links).website)
  return (
    <div className='organizations-section'>
      {
        ALL.map((m: OrganizationsDataType)  => (
          <Card
            key={m.name}
            name={m.name}
            images={m.images}
            link={m.links.website}
            major='ALL'
          />
        ))
      }
      {
        CSEE.map((m: OrganizationsDataType) => (
          <Card
            key={m.name}
            name={m.name}
            images={m.images}
            link={m.links.website}
            major='CSEE'
          />
        ))
      }
      {
        ME.map((m: OrganizationsDataType) => (
          <Card
            key={m.name}
            name={m.name}
            images={m.images}
            link={m.links.website}
            major='ME'
          />
        ))
      }
    </div>
  )
}
