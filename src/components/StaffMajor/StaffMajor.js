import React from 'react';

import "./StaffMajor.scss";

export default class StaffMajor extends React.Component {
  render() {
    function determineMajorColor (major) {
      switch (major) {
        case 'Computer Science':
          return '#293d59';
        case 'Mechanical Engineering':
          return '#0093AF';
        case 'Bioengineering':
          return '#4786a4';
        case 'Chemical Engineering':
          return '#6ea9a1';
        case 'CS & E':
          return '#1D2951';
        case 'C & EE':
          return '#89CFF0';
        case 'Electrical Engineering':
          return '#9dc699';
        case 'Aerospace Engineering':
          return '#203b6a';
        default:
          return;
      }
    }

    const styles = {
      backgroundColor: determineMajorColor(this.props.major)
    };

    return (
      <div className='staff-major' style={styles}>
        {this.props.major}
      </div>
    );
  }
}
