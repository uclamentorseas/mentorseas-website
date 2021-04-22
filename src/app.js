// @flow

import * as React from 'react'
import { Route, Switch } from 'react-router-dom'
import { StyleRoot } from 'radium'
import Navbar from '/views/Navbar'
import Footer from '/views/Footer'

import '/scss/General.scss'

import { HomePage, StaffPage, OrganizationsPage, SignUpPage } from '/pages'

const pages = [
  {
    path: '/',
    exactPath: true,
    name: 'Home',
    component: HomePage
  },
  {
    path: '/staff',
    exactPath: true,
    name: 'Our Staff',
    component: StaffPage
  },
  {
    path: '/organizations',
    exactPath: true,
    name: 'Organizations',
    component: OrganizationsPage
  },
  {
    path: '/signup',
    exactPath: true,
    name: 'Sign Up',
    component: SignUpPage
  }
  // {
  //   path: '/photos',
  //   exactPath: true,
  //   name: 'Photos',
  //   component: PhotosPage
  // }
]

const styleRootStyles = {
  width: '100%',
  height: '100%'
}

export { pages }

export default (): React.Element<*> => (
  <StyleRoot style={styleRootStyles}>
    <div className="app">
      <div className="page_wrapper">
        <Navbar />

        <Switch>
          {pages.map((page: PageType): React.Element<*> =>
            page.exactPath ? (
              <Route key={page.path} exact path={page.path} component={page.component} />
            ) : (
              <Route key={page.path} path={page.path} component={page.component} />
            )
          )}
        </Switch>

        <Footer />
      </div>
    </div>
  </StyleRoot>
)
