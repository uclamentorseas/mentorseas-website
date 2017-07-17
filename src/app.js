import React from 'react';
import { Route, Switch } from 'react-router-dom';

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

export default () => (
  <Switch>
    {
      pages.map((p) => (
        p.exactPath ?
        <Route exact path={p.path} component={p.component} /> :
        <Route path={p.path} component={p.component} />
      ))
    }
  </Switch>
);

export { pages }
