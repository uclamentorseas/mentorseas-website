import copy from './copy';
import './HomePage.scss';
import React from 'react';

import Hero from 'views/Hero';
import Navbar from 'views/Navbar';
import TitledParagraphs from 'components/TitledParagraphs';

export default class HomePage extends React.Component {
  render() {
    console.log(copy);
    return (
      <div className='page home_page'>
        <Navbar />
        <Hero />
        <div className='home_page_contents'>
          {
            copy.paragraphs.map(p => (
              <TitledParagraphs
                key={p.title}
                className='home_page_titled_paragraphs'
                title={p.title}
                paragraphs={p.paragraphs}
              />
            ))
          }
        </div>
      </div>
    );
  }
}
