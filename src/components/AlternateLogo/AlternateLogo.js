import React from 'react';

import alternateLogo from './alternate-logo.png';

export default function AlternateLogo(props) {
  return (
    <img
      className='alternate-logo'
      src={alternateLogo}
      alt='alternate logo'
    />
  );
}
