import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { Button, Container, Menu, Segment, Visibility } from 'semantic-ui-react'
import HomepageContent from './HomepageContent'
import { DesktopHeading } from './Heading'

const Desktop = (props) => {
  const [fixed, setFixed] = useState(false)

  const hideFixedMenu = () => setFixed(false)
  const showFixedMenu = () => setFixed(true)
  console.log('fixed change...', fixed)

  return (
    <>
      <Visibility
        once={false}
        onBottomPassed={showFixedMenu}
        onBottomPassedReverse={hideFixedMenu}
      >
        <Segment
          inverted
          textAlign="center"
          style={{ minHeight: 700, padding: '1em 0em' }}
          vertical
        >
          <Menu
            fixed={fixed ? 'top' : null}
            inverted={!fixed}
            pointing={!fixed}
            secondary={!fixed}
            size="large"
          >
            <Container>
              <Menu.Item as="a" active>
                Home
              </Menu.Item>
              <Menu.Item as="a">Work</Menu.Item>
              <Menu.Item as="a">Company</Menu.Item>
              <Menu.Item as="a">Careers</Menu.Item>
              <Menu.Item position="right">
                <Button as="a" inverted={!fixed}>
                  Log in
                </Button>
                <Button
                  as="a"
                  inverted={!fixed}
                  primary={fixed}
                  style={{ marginLeft: '0.5em' }}
                >
                  Sign Up
                </Button>
              </Menu.Item>
            </Container>
          </Menu>
          <DesktopHeading />
        </Segment>
        <HomepageContent />
      </Visibility>
      {props.children}
    </>
  )
}

Desktop.propTypes = {
  children: PropTypes.node,
}

export default Desktop
