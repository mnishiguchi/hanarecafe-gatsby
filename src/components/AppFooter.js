import React from 'react';
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  List,
  Segment,
} from 'semantic-ui-react';
import Media from 'react-media';

import BackToTopLink from './BackToTopLink';
import useSiteMetadata from './useSiteMetadata';
import LogoLink from './LogoLink';
import gatsbyLogo from '../img/gatsby.svg';

function AppFooter({ children }) {
  const { title, phone, phoneIntl, address, gmap } = useSiteMetadata();
  return (
    <>
      <Segment vertical padded="very" style={{ background: '#f5f6f7' }}>
        <Container>
          <Header as="h2">お問合せはこちら</Header>
          <Media query={{ maxWidth: 991 }}>
            {matches => {
              return matches ? (
                <Button basic color="teal" as="a" href={`tel:${phoneIntl}`}>
                  <Icon name="phone" /> お電話
                </Button>
              ) : (
                <List horizontal divided>
                  <List.Item>
                    <strong>電話</strong>: {phone}
                  </List.Item>
                </List>
              );
            }}
          </Media>
        </Container>
      </Segment>

      <Segment as="footer" inverted vertical style={{ padding: '5rem 0' }}>
        <span
          style={{
            position: 'absolute',
            bottom: '5rem',
            right: '1rem',
            zIndex: 2,
          }}
        >
          <BackToTopLink />
        </span>
        <Container>
          <Grid columns="equal" inverted stackable>
            <Grid.Row>
              <Grid.Column>
                <LogoLink width="200" />
              </Grid.Column>
              <Grid.Column>
                <List as="address" link inverted>
                  <List.Item>
                    Address:{' '}
                    <a href={gmap} target="_blank" rel="noopener noreferrer">
                      {address}
                    </a>
                  </List.Item>
                  <List.Item>
                    Phone:{' '}
                    <a
                      href={`tel:${phoneIntl}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {phone}
                    </a>
                  </List.Item>
                  <Divider hidden />
                  <List.Item>
                    <List as="address" link inverted>
                      <List.Item
                        style={{
                          display: 'flex',
                          justifyContent: 'flex-start',
                        }}
                      >
                        <div>
                          © {new Date().getFullYear()} {title}
                        </div>
                        <div style={{ marginLeft: '1.5rem' }}>
                          <span
                            style={{
                              marginRight: '0.4rem',
                              verticalAlign: 'top',
                            }}
                          >
                            Built with
                          </span>
                          <a
                            href="https://www.gatsbyjs.org/showcase/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <img
                              src={gatsbyLogo}
                              alt="GatsbyJS"
                              height="16px"
                            />
                          </a>
                        </div>
                      </List.Item>
                    </List>
                  </List.Item>
                </List>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
    </>
  );
}

export default AppFooter;
