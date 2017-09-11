import React from 'react'

import './StaffName.scss'

export default class StaffName extends React.Component {
  render() {
    return (
      <div className='staff-name'>
        {this.props.name}
      </div>
    )
  }
}
