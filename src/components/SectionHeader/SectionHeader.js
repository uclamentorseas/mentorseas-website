import React from 'react';
import header from 'pages/StaffPage/images/header.svg';
import './SectionHeader.scss';

export default class SectionHeader extends React.Component {
  render() {

    const {
      //title,
      subtitle
    } = this.props;

    return (
      <div className='section-header'>
        <div className='title'>
          <div className='title-header'>
            <img className='staff-header' alt='staff header' src={header} width='100%'/>
          </div>
        </div>
        <div className='subtitle'>
          {subtitle}
        </div>
      </div>
    );
  }
}
