// @flow

import * as React from 'react'

import FloatingShapes from 'views/FloatingShapes'
import AlternateLogo from 'components/AlternateLogo'
import uclaImage from 'images/ucla-aerial.jpg'
import './Hero.scss'

export default (): React.Element<*> => {
  const styles = {
    background: {
      backgroundImage: `url(${uclaImage})`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      filter: 'brightness(0.3)'
    }
  }

  return (
    <div
      className='hero'
      role='presentation'
    >

      <div
        style={styles.background}
        className='background'
      />

      <FloatingShapes />


      <div className='hero-text-overlay'>
        <AlternateLogo />

        <div className='subtitle'>
          {'Welcome to the family. 😀'}
        </div>
      </div>

    </div>
  )
}
