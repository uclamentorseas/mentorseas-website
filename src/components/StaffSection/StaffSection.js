import React from 'react'
import StaffCollection from 'components/StaffCollection'
import './StaffSection.scss'

export default class StaffSection extends React.Component {
  render() {
    const {
      // sectionTitle,
      staffType,
      executive,
      members
    } = this.props

    return (
      <div className={`${staffType} staff-section`}>
        <StaffCollection
          executive={executive}
          members={members}
        />
      </div>
    )
  }
}
