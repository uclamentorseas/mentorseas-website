import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';

import registerServiceWorker from './registerServiceWorker';
import routes from 'routes';

ReactDOM.render((
  <Router onUpdate={() => window.scrollTo(0, 0)} history={hashHistory}>
    {routes}
  </Router>
), document.getElementById('root'));

registerServiceWorker();
