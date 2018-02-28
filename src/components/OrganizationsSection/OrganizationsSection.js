// @flow

import * as React from 'react'

import organizations from 'components/OrganizationsData'
import Card from 'components/Card'
import './OrganizationsSection.scss'

export default (): React.Element<*> => {
  const {
    ALL,
    CSEE,
    ME,
    CHEME,
    BIOE,
    CIVE
  } = organizations

  // console.log(computerScience)
  // console.log((computerScience.links).website)
  return (
    <div className='organizations-section'>
      { // ALL ENGINEERING MAJORS
        ALL.map((m: OrganizationsDataType) => (
          <Card
            key={m.name}
            name={m.name}
            images={m.images}
            link={m.links.website}
            major='ALL'
          />
        ))
      }
      { // COMPUTER SCIENCE AND ELECTRICAL ENGINEERING
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
      { // MECHANICAL ENGINEERING
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
      { // CHEMICAL ENGINEERING
        CHEME.map((m: OrganizationsDataType) => (
          <Card
            key={m.name}
            name={m.name}
            images={m.images}
            link={m.links.website}
            major='CHEME'
          />
        ))
      }
      { // BIOENGINEERING
        BIOE.map((m: OrganizationsDataType) => (
          <Card
            key={m.name}
            name={m.name}
            images={m.images}
            link={m.links.website}
            major='CHEME'
          />
        ))
      }
      { // CIVIL ENGINEERING
        CIVE.map((m: OrganizationsDataType) => (
          <Card
            key={m.name}
            name={m.name}
            images={m.images}
            link={m.links.website}
            major='CHEME'
          />
        ))
      }
    </div>
  )
}
