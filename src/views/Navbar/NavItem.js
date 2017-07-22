import React from 'react';
import { Link } from 'react-router-dom';

export default class NavItem extends React.Component {
  render() {
    const {
      path,
      name
    } = this.props.item;
    
    return (
      <div className='hvr-grow nav-item' key={path} onClick={this.props.onClick}>
        <Link to={path}>
          {name.toUpperCase()}
        </Link>
      </div>
    );
  }
}
