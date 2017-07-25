import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom'
import { StyleRoot } from 'radium';

import registerServiceWorker from './registerServiceWorker';
import App from './app';

const styleRootStyles = {
  width: '100%',
  height: '100%'
}

ReactDOM.render((
  <HashRouter>
    <StyleRoot style={styleRootStyles}>
      <App />
    </StyleRoot>
  </HashRouter>
), document.getElementById('root'));

registerServiceWorker();
