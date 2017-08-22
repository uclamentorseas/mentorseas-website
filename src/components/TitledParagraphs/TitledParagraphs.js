// @flow

import * as React from 'react'
import './TitledParagraphs.scss'

type PropsType = {
  className: string,
  title: string,
  paragraphs: Array<string>
};

export default (props: PropsType): React.Element<*> => (
  <div
    className={`
      titled-paragraphs
      ${props.className}
    `}
  >

    <div className='title'>{props.title}</div>

    <div className='paragraphs'>
      {
        props.paragraphs.map((paragraph: string): React.Element<*> => (
          <div
            key={paragraph}
            className='paragraph'
          >
            {paragraph}
          </div>
        ))
      }
    </div>

  </div>
)
