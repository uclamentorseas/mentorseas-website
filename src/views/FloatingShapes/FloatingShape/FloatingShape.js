import React from 'react';

import './FloatingShape.scss';

export default class FloatingShape extends React.Component {
  render() {
    return (
      <div
        className='floating-shape'
        {...this.props}
      >
        {this.props.children}
      </div>
    );
  }
}
