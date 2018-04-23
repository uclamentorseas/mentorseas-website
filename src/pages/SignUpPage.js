// @flow

import * as React from 'react'
import styled from 'styled-components'
import SectionHeader from 'components/SectionHeader'
import { Title, Subtitle, Text } from 'components/typography'
import { colors } from 'styles'

const TextWrapper = styled.div`
  background-color: ${colors.cream};
  padding: 20px 5%;
`

const StepsWrapper = styled.div`
  margin: 45px 0;
  & > * {
    margin: 20px 0;
  }
`

export default function SignUpPage(): React.Element<*> {

  return (
    <div className='page'>
      <div className='page-contents'>
        <SectionHeader allowClickShapes={false} title='Become a Mentor!' background={colors.mint} />

        <TextWrapper>
          <Title color={colors.red}>Sign up to become a 2018-2019 mentorSEAS mentor!</Title>
          <Subtitle>{'It only takes a few minutes and it\'s as easy as 1, 2, 3...'}</Subtitle>

          <StepsWrapper>
            <Text size={18}>1. Log on to <a target='_blank' rel='noopener noreferrer' href='https://my.engineering.ucla.edu'>my.engineering.ucla.edu</a> {'and click on "About Me" under "My Profile".'}</Text>
            <Text size={18}>{'2. In the "Mentor Profile" section, fill in the information, agree to the agreements and click "Sign up to be a mentor".'}</Text>
            <Text size={18}>
              3. Fill out the additional mentee matching <a target='_blank' rel='noopener noreferrer' href='https://goo.gl/forms/ifNvt8SADELmjhqD3'>Google Form</a>, which is also linked to on myEngineering.
            </Text>
          </StepsWrapper>

          <Subtitle>{'That\'s it! Once you\'ve completed these steps, you\'re all set. 🤗'}</Subtitle>
        </TextWrapper>
      </div>
    </div>
  )
}
