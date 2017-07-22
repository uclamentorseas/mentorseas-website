import React from 'react';
import { Route, Switch } from 'react-router-dom';
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

export { pages };

export default () => (
  <div className='app'>

    <Navbar navItems={pages} />

    <div className='page_wrapper'>

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
);
