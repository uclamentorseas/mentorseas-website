import React from 'react';
import './Arrow.scss';

export default class Arrow extends React.Component {
  render() {
    const {
      showArrow
    } = this.props

    let arrows = null;
    if (showArrow) {
      arrows = <svg className='arrow-down'>
        <path className='a1' d='M0 0 L30 32 L60 0'></path>
        <path className='a2' d='M0 20 L30 52 L60 20'></path>
        <path className='a3' d='M0 40 L30 72 L60 40'></path>
      </svg>;
    }

    return (
      <div className='arrows' onClick={this.props.onClick}>
        {arrows}
      </div>
    );
  }
}
