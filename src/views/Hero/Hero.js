import React from 'react';

import './Hero.scss';
import FloatingShapes from 'views/FloatingShapes';
import AlternateLogo from 'components/AlternateLogo';
import uclaImage from 'images/ucla-aerial.jpg';

export default class Hero extends React.Component {
  render() {

    const styles = {
      background: {
        backgroundImage: `url(${uclaImage})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        filter: 'brightness(0.3)'
      }
    };

    return (
      <div
        style={styles.hero}
        className='hero'
        onClick={this.someoneClicked}
      >

        <div
          style={styles.background}
          className='background'
        />

        <FloatingShapes />


        <div className='hero-text-overlay'>
          <AlternateLogo />

          <div className='subtitle'>
            {`Welcome to the family. 😀`}
          </div>
        </div>

      </div>
    );
  }
}
