import React from 'react';
import Radium from 'radium';

import './FloatingShape.scss';

class FloatingShape extends React.Component {
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

export default Radium(FloatingShape);
