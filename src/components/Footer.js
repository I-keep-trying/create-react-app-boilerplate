import React from 'react'
import { List, Icon } from 'semantic-ui-react'

function Footer() {
  return (
    <div className="ui inverted bottom fixed fluid three item menu">
      <List.Item>About Us</List.Item>
      <List.Item>
        <a
          style={{ color: 'white', textDecoration: 'none' }}
          href="https://github.com/I-keep-trying/word-search"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon name="github" size="big" />
        </a>
        Andrea Crego 2020
      </List.Item>
      <List.Item>Support</List.Item>
    </div>
  )
}

export default Footer
