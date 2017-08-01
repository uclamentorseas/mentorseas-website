import copy from './copy';
import './HomePage.scss';
import React from 'react';

import Hero from 'views/Hero';
import Navbar from 'views/Navbar';
import TitledParagraphs from 'components/TitledParagraphs';

import uclaImage1 from 'images/ucla1.jpg';
import uclaImage2 from 'images/ucla2.jpg';
import uclaImage3 from 'images/ucla3.jpg';

const uclaImages = [uclaImage1, uclaImage2, uclaImage3];

export default class HomePage extends React.Component {
  render() {

    return (
      <div className='page home-page'>
        <Navbar />

        <Hero />
        <div className='home-page-contents'>
          {
            copy.paragraphs.map((p,i) => {
              return (
                <div
                  key={p.title}
                  className='image-overlay-paragraphs'
                >
                  <div className='picture'>
                    <img src={uclaImages[i]} alt='generic ucla landscape'/>
                  </div>
                  <div className='home-page-paragraphs'>
                    <TitledParagraphs
                      title={p.title}
                      paragraphs={p.paragraphs}
                    />
                  </div>
                </div>
              );
            })
          }
        </div>
      </div>
    );
  }
}
