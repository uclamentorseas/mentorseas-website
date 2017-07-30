import React from 'react';

import './AlternateLogo.scss';
import alternateLogo from './alternate-logo.png';

export default function AlternateLogo(props) {
  return (
    <div className='logo'>
      <img src={alternateLogo} alt='alternate logo'/>
    </div>
  );
}
