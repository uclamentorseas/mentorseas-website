import React from 'react';

import StaffName from 'components/StaffName';
import StaffMajor from 'components/StaffMajor';
import StaffImage from 'components/StaffImage';
import StaffDescription from 'components/StaffDescription';
import SlideOutPanel from 'components/SlideOutPanel';
//import Arrow from 'components/Arrow'; no longer used

import './StaffCard.scss';

class StaffCard extends React.Component {
  constructor(props) {
    super();
    this.state = {
      showPanel: false
    };
    this.showPanel = this.showPanel.bind(this);
    this.hidePanel = this.hidePanel.bind(this);
  }

  showPanel() {
    if (!this.state.showPanel) {
      this.setState ({
        showPanel: !this.state.showPanel
      });
    }
  }

  hidePanel() {
    this.setState ({
      showPanel: !this.state.showPanel
    });
  }

  render() {
    const {
      name,
      position,
      major,
      description,
      images,
      links
    } = this.props;

    const {
      showPanel
    } = this.state;

    return (
      <div className='staff-card-wrapper' style={!showPanel ? {'cursor': 'pointer'} : {}} onClick={this.showPanel}>
        <SlideOutPanel
          className='staff-panel'
          direction='slideDown'
          isOpen={showPanel}
        >
          <StaffDescription
            position={position}
            description={description}
            links={links}
            onClick={this.hidePanel}
          />
        </SlideOutPanel>

        <StaffImage images={images}/>
        <StaffMajor major={major} />
        <StaffName name={name} />
      </div>
    )
  }
}

export default StaffCard;
