import React from 'react';

import './Hero.scss';
import FloatingShapes from 'views/FloatingShapes';
import AlternateLogo from 'components/AlternateLogo';

export default class Hero extends React.Component {
  render() {
    return (
      <div className='hero_wrapper'>
        <div className='hero' onClick={this.someoneClicked}>
          <div className='hero-floating-shapes'>
            <FloatingShapes />
          </div>
          <div className='hero-text-overlay'>
            <AlternateLogo />

            <div className='subtitle'>
              {`Welcome to the family. 😀`}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
