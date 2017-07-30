import React from 'react';

import './TitledParagraphs.scss';

export default function TitledParagraphs(props) {
  return (
    <div className={`titled-paragraphs ${props.className}`}>
      <div className='title'>
        {props.title}
      </div>
      <div className='paragraphs'>
        {
          props.paragraphs.map((paragraph) => (
            <div className='paragraph'>{paragraph}</div>
          ))
        }
      </div>
    </div>
  );
}
