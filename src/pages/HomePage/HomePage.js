// @flow

import React from 'react'

import Hero from 'views/Hero'
import TitledParagraphs from 'components/TitledParagraphs'
import { getSomeUclaImages } from 'images'
import copy from './copy'
import './HomePage.scss'

export default (): React.Element<*> => {
  const uclaImages = getSomeUclaImages(copy.paragraphs.length)

  return (
    <div className='page home-page'>

      <Hero />

      <div className='home-page-contents'>
        {
          copy.paragraphs.map((
            p: Array<string>,
            i: number
          ): React.Element<*> => (
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
  )
}
