// @flow
/* eslint no-param-reassign: ["error", { "props": false }] */
/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */

const organizations = {
  ALL: [
    {
      name: 'Bruin Entrepreneurs',
      abbreviation: 'be',
      links: {
        website: 'http://www.bruinentrepreneurs.org/'
      }
    },
    {
      name: 'American Indian Science & Engineering Society',
      abbreviation: 'aises',
      links: {
        website: 'https://www.facebook.com/uclaaises/'
      }
    },
    {
      name: 'Engineering Ambassador Program',
      abbreviation: 'eap',
      links: {
        website: 'http://www.seasoasa.ucla.edu/tours/',
        facebook: 'https://www.facebook.com/UCLAEngineers'
      }
    },
    {
      name: 'Engineering Society, University of California',
      abbreviation: 'esuc',
      links: {
        website: 'http://esuc.herokuapp.com/',
        facebook: 'https://www.facebook.com/ESUCLA/'
      }
    },
    {
      name: 'Engineers Without Borders',
      abbreviation: 'ewb',
      links: {
        website: 'https://www.ewbucla.org/'
      }
    },
    {
      name: 'Phi Sigma Rho',
      abbreviation: 'psr',
      links: {
        website: 'https://www.phirhobruins.com/'
      }
    },
    {
      name: 'Renewable Energy Association',
      abbreviation: 'rea',
      links: {
        website: 'http://rea.seas.ucla.edu/'
      }
    },
    {
      name: 'Rocket Project at UCLA',
      abbreviation: 'rp',
      links: {
        website: 'https://rocketprojectatucla.squarespace.com/'
      }
    },
    {
      name: 'Society of Asian Scientists and Engineers ',
      abbreviation: 'sase',
      links: {
        website: 'https://www.facebook.com/saseucla/'
      }
    },
    {
      name: 'Bruin Racing',
      abbreviation: 'br',
      links: {
        website: 'https://www.bruinracing.com/'
      }
    },
    {
      name: 'Society of Latino Engineers and Scientists',
      abbreviation: 'soles',
      links: {
        website: 'https://uclasoles.wordpress.com/'
      }
    },
    {
      name: 'Society of Women Engineers',
      abbreviation: 'swe',
      links: {
        website: 'http://www.seas.ucla.edu/swe/'
      }
    },
    {
      name: 'Tau Beta Pi',
      abbreviation: 'tbp',
      links: {
        website: 'https://tbp.seas.ucla.edu/'
      }
    },
    {
      name: 'Theta Tau',
      abbreviation: 'tt',
      links: {
        website: 'http://www.thetataubruins.org/'
      }
    },
    {
      name: 'Triangle Fraternity',
      abbreviation: 'triangle',
      links: {
        website: 'http://www.bruintriangles.com/'
      }
    }
  ],
  CSEE: [
    {
      name: 'Association for Computer Machinery',
      abbreviation: 'acm',
      links: {
        website: 'http://www.uclaacm.com/',
        facebook: 'https://www.facebook.com/uclaacm/'
      }
    },
    {
      name: 'Eta Kappa Nu',
      abbreviation: 'hkn',
      links: {
        website: 'http://hkn.ee.ucla.edu/'
      }
    },
    {
      name: 'Institute of Electrical and Electronics Engineers',
      abbreviation: 'ieee',
      links: {
        website: 'http://www.ieee.ucla.edu/'
      }
    },
    {
      name: 'IEEE WATT',
      abbreviation: 'ieee-watt',
      links: {
        website: 'http://www.ieeewatt.ucla.edu/'
      }
    },
    {
      name: 'Linux Users Group',
      abbreviation: 'lug',
      links: {
        website: 'https://www.facebook.com/UCLA-Linux-Users-Group-125883457435649/'
      }
    },
    {
      name: 'Upsilon Pi Epsilon',
      abbreviation: 'upe',
      links: {
        website: 'https://upe.seas.ucla.edu/'
      }
    },
    {
      name: 'UCLA DevX',
      abbreviation: 'devx',
      links: {
        website: 'http://ucladevx.com/#/',
        facebook: 'https://www.facebook.com/ucladevx/'
      }
    },
    {
      name: 'Creative Labs',
      abbreviation: 'cl',
      links: {
        website: 'https://uclacreatives.github.io/',
        facebook: 'https://www.facebook.com/uclacreatives/'
      }
    },
    {
      name: 'LA Hacks',
      abbreviation: 'lahacks',
      links: {
        website: 'https://lahacks.com/',
        facebook: 'https://www.facebook.com/LAHacks'
      }
    },
    {
      name: 'BruinMeet',
      abbreviation: 'bm',
      links: {
        website: 'http://www.bruinmeet.com/',
        facebook: 'https://www.facebook.com/BruinMeet/'
      }
    }
  ],
  ME: [
    {
      name: 'American Society of Mechanical Engineers',
      abbreviation: 'asme',
      links: {
        website: 'http://www.asmebruins.com/',
        facebook: 'https://www.facebook.com/uclaasme/'
      }
    }
  ],
  CHEME: [
    {
      name: 'American Institute of Chemical Engineers',
      abbreviation: 'aiche',
      links: {
        website: 'http://www.aicheucla.com/'
      }
    }
  ],
  BIOE: [
    {
      name: 'Biomedical Engineering Society',
      abbreviation: 'bmes',
      links: {
        website: 'http://bmes.seas.ucla.edu/'
      }
    }
  ],
  CIVE: [
    {
      name: 'American Society of Civil Engineers',
      abbreviation: 'asce',
      links: {
        website: 'http://www.ascebruins.org/'
      }
    },
    {
      name: 'More Coming Soon...',
      abbreviation: 'more',
      links: {
        website: 'http://mentorship.seas.ucla.edu/#/'
      }
    }
  ]
}

Object.keys(organizations).forEach((orgType: string) => {
  organizations[orgType].forEach((org: OrganizationsDataType) => {
    const imageId = `${org.abbreviation}`

    org.images = {}
    // Load regular image
    // flow-disable-next-line
    org.images.regular = require(`pages/OrganizationsPage/images/${imageId}.jpg`)
  })
})

export default organizations
