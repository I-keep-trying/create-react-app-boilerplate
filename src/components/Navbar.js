import PropTypes from 'prop-types'
import React, { useState } from 'react'
import {
  Button,
  Container,
  Menu,
  Responsive,
  Segment,
  Visibility,
} from 'semantic-ui-react'
import { HomepageHeading } from './HomePage'
import Desktop from './DesktopContainer'
import Mobile from './MobileContainer'

const Navbar = ({children}) => {
return (
    <div>
    <Desktop>{children}</Desktop>
    <Mobile>{children}</Mobile>
  </div>
)
}

Navbar.propTypes = {
    children: PropTypes.node,
  }

export default Navbar