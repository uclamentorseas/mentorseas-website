import './HomePage.scss';
import React from 'react';

import { Square, Triangle, Circle, Cross } from 'components/Shapes';

export default class HomePage extends React.Component {
  render() {
    return (
      <div className='page home_page'>
        <Square size={50}/>
        <Triangle size={50} />
        <Circle size={50} />
        <Cross size={50} />
      </div>
    );
  }
}
