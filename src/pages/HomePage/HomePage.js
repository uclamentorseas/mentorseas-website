import './HomePage.scss';
import React from 'react';

import { Square } from 'components/Shapes';

export default class HomePage extends React.Component {
  render() {
    return (
      <div className='page home_page'>
        This is the home page.
        <Square />
      </div>
    );
  }
}
