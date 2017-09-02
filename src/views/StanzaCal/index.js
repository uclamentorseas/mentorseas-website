// @flow

import * as React from 'react'

const STANZA_CAL_EMBED_URL = 'https://dff2h0hbfv6w4.cloudfront.net/scripts/embed-stanzacal-v1.js'

type PropsType = {};

export default class StanzaCal extends React.Component<PropsType> {
  componentWillMount() {
    const script = document.createElement('script')
    script.setAttribute('src', STANZA_CAL_EMBED_URL)
    if (document.body) {
      document.body.appendChild(script)
    }
  }

  render(): React.Element<*> {
    return (
      <div
        className='stanzacal'
        data-stanzacal='uclamentorseas'
        data-width='100%'
        data-height='250px'
      />
    )
  }
}
