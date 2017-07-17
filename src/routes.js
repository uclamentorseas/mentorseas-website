import React from 'react';
import { Route } from 'react-router';

import {
  HomgePage,
  StaffPage
} from './pages';

const pages = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/staff',
    name: 'Our Staff',
    component: StaffPage
  }
];

export default pages.map(p => (
  <Route
    key={p.path}
    path={p.path}
    component={p.component}
  />
));

export { pages }
