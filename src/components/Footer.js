import React from 'react'
import { Container, Grid, Header, List, Segment, Icon } from 'semantic-ui-react'

const Footer = () => {
  return (
    <Segment inverted vertical style={{ padding: '5em 0em' }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header inverted as="h4" content="About" />
              <List link inverted>
                <List.Item as="a">Sitemap</List.Item>
                <List.Item as="a">Contact Me</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as="h4" content="Services" />
              <List link inverted>
                <List.Item as="a">One</List.Item>
                <List.Item as="a">Two</List.Item>
                <List.Item as="a">Three</List.Item>
                <List.Item as="a">Four</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={7}>
              <Header as="h4" inverted>
                Developed by Andrea Crego 2020{' '}
                <a
                  href="https://github.com/I-keep-trying"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon inverted name="github" />
                </a>
              </Header>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  )
}

export default Footer
