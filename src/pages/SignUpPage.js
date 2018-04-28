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

const TutorialImage = styled.img`
  max-height: 300px;
`

export default function SignUpPage(): React.Element<*> {
  return (
    <div className="page">
      <div className="page-contents">
        <SectionHeader
          allowClickShapes={false}
          title="Become a Mentor!"
          background={colors.mint}
        />

        <TextWrapper>
          <Title color={colors.red}>
            Sign up to become a 2018-2019 mentorSEAS mentor!
          </Title>
          <Subtitle>
            {"It only takes a few minutes and it's as easy as 1, 2, 3..."}
          </Subtitle>

          <StepsWrapper>
            <Text size={18}>
              1. Log on to{' '}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://my.engineering.ucla.edu"
              >
                my.engineering.ucla.edu
              </a>{' '}
              {'and click on "About Me" under "My Profile".'}
            </Text>
            <TutorialImage alt="1" src="https://placehold.it/800x600" />
            <Text size={18}>
              {
                '2. In the "Mentor Profile" section, fill in the information, agree to the agreements and click "Sign up to be a mentor".'
              }
            </Text>
            <TutorialImage alt="1" src="https://placehold.it/800x600" />
            <Text size={18}>
              3. Fill out the additional mentee matching{' '}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://ccle.ucla.edu/mod/feedback/view.php?id=1983190"
              >
                survey on CCLE
              </a>, which is also linked to on myEngineering.
            </Text>
            <TutorialImage alt="1" src="https://placehold.it/800x600" />
          </StepsWrapper>

          <Subtitle>
            {"That's it! Once you've completed these steps, you're all set. 🤗"}
          </Subtitle>
        </TextWrapper>
      </div>
    </div>
  )
}
