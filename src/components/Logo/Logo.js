import React from 'react';

import './Logo.scss';
import logo from './logo.png';

export default function Logo(props) {
  return (
    <div className='logo'>
      <img src={logo} alt='logo'/>
    </div>
  );
}
