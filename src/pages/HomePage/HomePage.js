import './HomePage.scss';
import React from 'react';

import Hero from 'views/Hero';

export default class HomePage extends React.Component {
  render() {
    return (
      <div className='page home_page'>
        <Hero />
        <div>This is the homepage text.</div>
      </div>
    );
  }
}
