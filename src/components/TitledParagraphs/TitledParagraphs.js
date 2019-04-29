// @flow

import * as React from 'react'
import './TitledParagraphs.scss'

type PropsType = {
  className: string,
  title: string,
  paragraphs: Array<string>,
  button: string,
  buttonLink: string
}

export default (props: PropsType): React.Element<*> => (
  <div
    className={`
      titled-paragraphs
      ${props.className}
    `}
  >
    <div className="title">{props.title}</div>

    <div className="paragraphs">
      {props.paragraphs.map(
        (paragraph: string): React.Element<*> => (
          <div key={paragraph} className="paragraph">
            {paragraph}
          </div>
        )
      )}
      {props.button && (
        <a href={props.buttonLink}>
          <button className="btn draw-border">{props.button}</button>
        </a>
      )}
    </div>
  </div>
)
