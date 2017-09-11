// @flow

import * as React from 'react'
import StaffName from 'components/StaffName'
import StaffMajor from 'components/StaffMajor'
import StaffImage from 'components/StaffImage'
import StaffDescription from 'components/StaffDescription'
import SlideOutPanel from 'components/SlideOutPanel'

import './StaffCard.scss'

type StateType = {
  showPanel: boolean
};

type PropsType = {
  name: MemberDataNameType,
  position: string,
  major: string,
  involvement: string,
  restaurant: string,
  description: string,
  images: string,
  links: string
};

class StaffCard extends React.Component<PropsType, StateType> {
  props: PropsType
  state: StateType

  constructor() {
    super()
    this.state = {
      showPanel: false
    }
  }

  showPanel = () => {
    if (!this.state.showPanel) {
      this.setState({
        showPanel: !this.state.showPanel
      })
    }
  }

  hidePanel = () => {
    this.setState({
      showPanel: !this.state.showPanel
    })
  }

  render(): React.Element<*> {
    return (
      <div
        className='staff-card-wrapper'
        role="button"
        tabIndex="0"
        style={!this.state.showPanel ? { cursor: 'pointer' } : {}}
        onClick={this.showPanel}
      >
        <SlideOutPanel
          className='staff-panel'
          direction='slideDown'
          isOpen={this.state.showPanel}
        >
          <StaffDescription
            position={this.props.position}
            involvement={this.props.involvement}
            restaurant={this.props.restaurant}
            description={this.props.description}
            links={this.props.links}
            onClick={this.hidePanel}
          />
        </SlideOutPanel>

        <StaffImage images={this.props.images} />
        <StaffMajor major={this.props.major} />
        <StaffName name={this.props.name} />
      </div>
    )
  }
}

export default StaffCard
