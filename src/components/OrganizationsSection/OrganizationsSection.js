// @flow

import * as React from 'react'

import organizations from 'components/OrganizationsData'
import Card from 'components/Card'
import './OrganizationsSection.scss'

export default (): React.Element<*> => {

  const {
    CSEE // computer science and electrical
  } = organizations

  // console.log(computerScience)
  // console.log((computerScience.links).website)
  return (
    <div className='organizations-section'>
      {
        CSEE.map(m => (
          <Card
            key={m.name}
            name={m.name}
            images={m.images}
            link={m.links.website}
            major='CSEE'
          />
        ))
      }
    </div>
  )
}
