// @flow

import * as React from 'react'

import SectionHeader from 'components/SectionHeader'
import StaffSection from 'components/StaffSection'
import staff from 'components/StaffMembersData'
import './StaffPage.scss'

export default (): React.Element<*> => {
  const getMemberID = (m: MemberDataType) => `${m.name.first}_${m.name.last}`

  const sortMembers = (a: MemberDataType, b: MemberDataType): number => {
    if (getMemberID(a) < getMemberID(b)) return -1
    if (getMemberID(a) > getMemberID(b)) return 1
    return 0
  }

  return (
    <div className="staff-page page">
      <div className="page-contents">
        <div className="staff-container">
          <SectionHeader allowClickShapes={false} title="Meet Our Staff" background={'black'} />

          <StaffSection
            staffType="staff-regular"
            executive={staff.executive}
            members={staff.staffMember.sort(sortMembers)}
            representatives={staff.representatives.sort(sortMembers)}
          />
        </div>
      </div>
    </div>
  )
}
