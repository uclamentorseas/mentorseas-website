// @flow

import * as React from 'react'
import StaffCollection from '~/components/StaffCollection'
import './StaffSection.scss'

type PropsType = {
  staffType: string,
  executive: Array<MemberDataType>,
  members: Array<MemberDataType>,
  representatives: Array<MemberDataType>
}

export default (props: PropsType): React.Element<*> => (
  <div className={`${props.staffType} staff-section`}>
    <StaffCollection executive={props.executive} members={props.members} representatives={props.representatives} />
  </div>
)
