import PropTypes from 'prop-types'
import React from 'react'
import { Container, Header, Icon, Image } from 'semantic-ui-react'
import StyledH1 from './elements/StyledElements/StyledH1'
import StyledButton from './elements/StyledElements/StyledButton'
import Footer from './components/Footer'
import Desktop from './components/DesktopContainer'
import Mobile from './components/MobileContainer'
import logo from './logo.svg'
import { Media, MediaContextProvider } from './Media'

export const HomepageHeading = ({ mobile }) => {
  return (
  <Container text>
    <Image src={logo} className="App-logo" alt="logo" />
    <StyledH1 as="h1">
      Edit <code>src/App.js</code> and save to reload.
    </StyledH1>
    <Header
      as="h2"
      content="Boilerplate React App."
      inverted
      style={{
        fontSize: mobile ? '1.5em' : '1.7em',
        fontWeight: 'normal',
        marginTop: mobile ? '0.5em' : '1.5em',
      }}
    />
    <StyledButton primary size="huge">
      Self Destruct
      <Icon name="right arrow" />
    </StyledButton>
  </Container>
)}

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
}

const HomepageLayout = () => (
  <MediaContextProvider>
    <Media at="sm">
      <Mobile />
    </Media>
    <Media greaterThan="sm">
      <Desktop />
    </Media>
    <Footer />
  </MediaContextProvider>
)
export default HomepageLayout
