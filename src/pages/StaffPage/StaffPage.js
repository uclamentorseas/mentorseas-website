import React from 'react';

import SectionHeader from 'components/SectionHeader';
import StaffSection from 'components/StaffSection';

import "./StaffPage.scss";

import staff from 'components/StaffMembersData';

export default class StaffPage extends React.Component {
  render() {

    function getMemberID(m) { return m.name.first + '_' + m.name.last; }

    function sortMembers(a, b) {
      if (getMemberID(a) < getMemberID(b)) return -1;
      if (getMemberID(a) > getMemberID(b)) return 1;
      return 0;
    }

    return (
      <div className='staff-page page'>
        <div className='page-contents'>
          <div className='container'>
            <div className='staff-header staff-section'>
              <SectionHeader title='Meet Our Staff' subtitle=''/>
            </div>

            <StaffSection
              staffType='staff-regular'
              members={staff.staffMember.sort(sortMembers)}
            />

        </div>
      </div>
    </div>
    );
  }
}
