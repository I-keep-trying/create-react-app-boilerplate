import React from 'react'
import { Button, Container, Header, Icon } from 'semantic-ui-react'
import styled from 'styled-components'

const HeaderMobileH1 = styled(Header)`
  &&& {
    font-size: 2em;
    text-align: center;
    font-weight: normal;
    margin-bottom: 0;
    margin-top: 1.5em;
  }
`

const HeaderDesktopH1 = styled(Header)`
  &&& {
    font-size: 4em;
    text-align: center;
    font-weight: normal;
    margin-bottom: 0;
    margin-top: 3em;
  }
`

const HeaderMobileH2 = styled(Header)`
  &&& {
    font-size: 1.5em;
    text-align: center;
    font-weight: normal;
    margin-bottom: 0.5em;
    margin-top: 0.5em;
  }
`

const HeaderDesktopH2 = styled(Header)`
  &&& {
    font-size: 1.7em;
    text-align: center;
    font-weight: normal;
    margin-bottom: 1.5em;
    margin-top: 1.5em;
  }
`

const headingTitle = 'Imagine-a-Company'
const headingText = 'Do whatever you want when you want to.'
const StartButton = () => (
  <Button basic inverted size="huge">
    Self Destruct
    <Icon name="right arrow" />
  </Button>
)

export const MobileHeading = () => (
  <Container text>
    <HeaderMobileH1 inverted>{headingTitle}</HeaderMobileH1>
    <HeaderMobileH2 inverted>{headingText}</HeaderMobileH2>
    <StartButton />
  </Container>
)

export const DesktopHeading = () => (
  <Container text>
    <HeaderDesktopH1 inverted>{headingTitle} </HeaderDesktopH1>
    <HeaderDesktopH2 inverted> {headingText}</HeaderDesktopH2>
    <StartButton />
  </Container>
)
