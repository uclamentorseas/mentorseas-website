import React from 'react';

import './SocialIcons.scss';
import 'scss/fa/font-awesome.scss';

export default function SocialIcons(props) {
  return (
    <div className='social-icons'>
      <div className='icon-wrapper'>
        <a href='https://www.facebook.com/mentorSEAS'>
          <i className='fa fa-facebook fa-2x'></i>
        </a>
      </div>
      <div className='icon-wrapper'>
        <a href='https://www.github.com/uclamentorseas/'>
          <i className='fa fa-github fa-2x'></i>
        </a>
      </div>
    </div>
  );
}
