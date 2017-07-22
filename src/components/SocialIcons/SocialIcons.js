import React from 'react';

import './SocialIcons.scss';
import 'scss/fa/font-awesome.scss';

export default function SocialIcons(props) {
  return (
    <div className='social-icons'>
      <div className='icon-wrapper'>
        <a href='http://www.facebook.com/'>
          <i className='fa fa-facebook fa-lg'></i>
        </a>
      </div>
      <div className='icon-wrapper'>
        <a href='http://www.github.com/uclamentorseas/'>
          <i className='fa fa-github fa-lg'></i>
        </a>
      </div>
    </div>
  );
}
