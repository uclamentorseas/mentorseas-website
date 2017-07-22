import React from 'react';
import { Link } from 'react-router-dom';

export default class NavLogo extends React.Component {
  render() {
    return (
      <div className='navbar-logo'>
        <Link to='/'>mentorSEAS</Link>
      </div>
    );
  }
}
