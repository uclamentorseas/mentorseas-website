import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { StyleRoot } from 'radium';
import Navbar from 'views/Navbar';
import Footer from 'views/Footer';

import 'scss/General.scss';

import {
  HomePage,
  StaffPage
} from 'pages';

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
  }
];

const styleRootStyles = {
  width: '100%',
  height: '100%'
}

export { pages };

export default () => (
  <StyleRoot style={styleRootStyles}>
    <div className='app'>

      <div className='page_wrapper'>

        <Navbar />

        <Switch>
          {
            pages.map((p) => (
              p.exactPath ?
              <Route key={p.path} exact path={p.path} component={p.component} /> :
              <Route key={p.path} path={p.path} component={p.component} />
            ))
          }
        </Switch>

        <Footer />

      </div>

    </div>
  </StyleRoot>
);
