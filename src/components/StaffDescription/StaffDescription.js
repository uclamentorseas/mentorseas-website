import React from 'react';

import './StaffDescription.scss';

export default class StaffDescription extends React.Component {
  render() {
    const {
      position,
      description,
      links,
      onClick
    } = this.props;

    const facebook = links.facebook ? (<div className='icon-wrapper'>
                                          <a target='_blank' href={links.facebook}>
                                            <i className='fa fa-facebook fa-2x'></i>
                                          </a>
                                        </div>) : null;

    const linkedin = links.linkedin ? (<div className='icon-wrapper'>
                                          <a target='_blank' href={links.linkedin}>
                                            <i className='fa fa-linkedin fa-2x'></i>
                                          </a>
                                        </div>) : null;

    const github = links.github ? (<div className='icon-wrapper'>
                                          <a target='_blank' href={links.github}>
                                            <i className='fa fa-github fa-2x'></i>
                                          </a>
                                        </div>) : null;

    const email = links.email ? (<div className='icon-wrapper'>
                                          <a href={links.email}>
                                            <i className='fa fa-envelope fa-2x'></i>
                                          </a>
                                        </div>) : null;

    const personal = links.personal ? (<div className='icon-wrapper'>
                                          <a target='_blank' href={links.personal}>
                                            <i className='fa fa-id-card-o fa-2x'></i>
                                          </a>
                                        </div>) : null;



    return (
      <div className='staff-description'>
        <button className='close-button' onClick={onClick}></button>
        <div className='staff-description-position'>
          <span className='position-title'>Position</span>
          <span className='position-content'>: {position}</span>
        </div>

        <div className='staff-description-links'>
          {facebook}
          {linkedin}
          {github}
          {personal}
          {email}
        </div>
      </div>
    );
  }
}
