// @flow

import * as React from 'react'

import FloatingShapes from 'views/FloatingShapes'
import SectionHeader from 'components/SectionHeader'
import StaffSection from 'components/StaffSection'
import staff from 'components/StaffMembersData'
import './StaffPage.scss'

export default (): React.Element<*> => {
  const getMemberID = (m: MemberDataType) => (`${m.name.first}_${m.name.last}`)

  const sortMembers = (a: MemberDataType, b: MemberDataType): number => {
    if (getMemberID(a) < getMemberID(b)) return -1
    if (getMemberID(a) > getMemberID(b)) return 1
    return 0
  }

  return (
    <div className='staff-page page'>
      <div className='page-contents'>
        <div className='staff-container'>
          <div className='staff-header staff-section'>
            <FloatingShapes allowClickShapes={false} />
            <SectionHeader title='Meet Our Staff' />
          </div>

          <StaffSection
            staffType='staff-regular'
            executive={staff.executive}
            members={staff.staffMember.sort(sortMembers)}
          />

        </div>
      </div>
    </div>
  )
}
