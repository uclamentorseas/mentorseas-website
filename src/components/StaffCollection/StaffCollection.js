import React from 'react';

//do misc import statements here from other components
import StaffCard from '../StaffCard';

import "./StaffCollection.scss";

export default class StaffCollection extends React.Component {
  render() {

    const members = this.props.members;

    return (
      <div className='staff-collection'>
        { members.map((m) =>
          <StaffCard
            key={m.name.first + '_' + m.name.last}
            images={m.images}
            name={m.name.first}
            position={m.position}
            major={m.major}
            description={m.description}
            links={m.links}
          />
        )}
      </div>
    );
  }
}
