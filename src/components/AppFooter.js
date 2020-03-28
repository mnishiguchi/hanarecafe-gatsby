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
import logo from '../img/logo-vertical.svg';

function AppFooter({ children }) {
  const { title, phone, phoneValue, address, gmap } = useSiteMetadata();
  return (
    <>
      <Segment vertical padded="very" style={{ background: '#f5f6f7' }}>
        <Container>
          <Header as="h2">お問合せはこちら</Header>
          <Media query={{ maxWidth: 991 }}>
            {(matches) => {
              return matches ? (
                <Button basic color="teal" as="a" href={`tel:${phoneValue}`}>
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

          <Segment>
            通常の土曜日、日曜日は店舗の連休明けということもあり、地元の方が朝からたくさん来ていただいて、開店１時間で残りが僅かになる事が稀にあります。小さな店舗で、小さなオーブンをフル回転させながら焼いてはおりますが、夫婦2人で全ての作業をしておりますので、焼き上げが追いつかない場合あります…
            島外からのお客様につきましては、せっかく船を乗って起こしくださる中、パンが無い状態は申し訳なく思いますので、一度ご連絡頂くか、取り置きの連絡をくださいますようよろしくお願いしますm(_
            _)m
          </Segment>
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
          <BackToTopLink inverted />
        </span>
        <Container>
          <Grid columns="equal" inverted stackable>
            <Grid.Row>
              <Grid.Column>
                <LogoLink width="200" src={logo} />
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
                      href={`tel:${phoneValue}`}
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
