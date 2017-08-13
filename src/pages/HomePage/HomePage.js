import React from 'react';

import './HomePage.scss';
import copy from './copy';
import Hero from 'views/Hero';
import Navbar from 'views/Navbar';
import TitledParagraphs from 'components/TitledParagraphs';
import { getSomeUclaImages } from 'images';

export default class HomePage extends React.Component {
  render() {

    const uclaImages = getSomeUclaImages(copy.paragraphs.length);

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
