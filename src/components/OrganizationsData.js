// @flow
/* eslint no-param-reassign: ["error", { "props": false }] */
/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */

const organizations = {
  CSEE: [
    {
      name: 'Association for Computer Machinery (ACM)',
      abbreviation: 'acm',
      links: {
        website: 'http://www.uclaacm.com/',
        facebook: 'https://www.facebook.com/uclaacm/'
      }
    },
    {
      name: 'Eta Kappa Nu (HKN)',
      abbreviation: 'hkn',
      links: {
        website: 'http://hkn.ee.ucla.edu/',
      }
    },
    {
      name: 'Institute of Electrical and Electronics Engineers (IEEE)',
      abbreviation: 'ieee',
      links: {
        website: 'http://www.ieee.ucla.edu/'
      }
    }
  ],
  // mechanicalEngineering: [
  //   {
  //     organization: 'Association for Computer Machinery (ACM)',
  //     abbreviation: 'acm'
  //     links: {
  //       website: 'http://www.uclaacm.com/',
  //       facebook: 'https://www.facebook.com/uclaacm/'
  //     }
  //   }
  // ]
}

Object.keys(organizations).forEach((orgType: string) => {
  organizations[orgType].forEach((org: OrganizationsDataType) => {
    const name = org.name
    const imageId = `${org.abbreviation}`

    org.images = {}
    // Load regular image
    // flow-disable-next-line
    org.images.regular = require(`pages/OrganizationsPage/images/${imageId}.jpg`)
  })
})

export default organizations
