import React from 'react';

import './Hero.scss';
import FloatingShapes from 'views/FloatingShapes';

export default class Hero extends React.Component {
  render() {
    return (
      <div className='hero_wrapper'>
        <div className='hero'>
          <FloatingShapes />
        </div>
      </div>
    );
  }
}
