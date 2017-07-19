import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Skeleton from 'views/Skeleton';

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
  <Skeleton>
    <Switch>
      {
        pages.map((p) => (
          p.exactPath ?
          <Route key={p.path} exact path={p.path} component={p.component} /> :
          <Route key={p.path} path={p.path} component={p.component} />
        ))
      }
    </Switch>
  </Skeleton>
);

export { pages }
