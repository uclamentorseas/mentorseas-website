import React from 'react';

import './HomePage.scss';
import copy from './copy';
import Hero from 'views/Hero';
import TitledParagraphs from 'components/TitledParagraphs';
import { getSomeUclaImages } from 'images';

export default class HomePage extends React.Component {
  render() {

    const uclaImages = getSomeUclaImages(copy.paragraphs.length);

    return (
      <div className='page home-page'>

        <Hero />

        <div className='home-page-contents'>
          {
            copy.paragraphs.map((p,i) => (
              <div key={p.title} className='home-page-copy-row'>

                <div
                  className='picture'
                  style={{
                    background: `url(${uclaImages[i]}) center/cover no-repeat`
                  }}
                />

                <TitledParagraphs
                  title={p.title}
                  paragraphs={p.paragraphs}
                />

              </div>
            ))
          }
        </div>
      </div>
    );
  }
}
