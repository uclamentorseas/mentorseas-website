import './HomePage.scss';
import React from 'react';

import { Square, Triangle, Circle, Cross, Squiggle } from 'components/Shapes';

export default class HomePage extends React.Component {
  render() {
    return (
      <div className='page home_page'>
        <Square size={20}/>
        <Triangle size={20} />
        <Circle size={20} />
        <Cross size={20} />
        <Squiggle width={120} height={20}/>
      </div>
    );
  }
}
