import React from 'react';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';
import {
  Card,
  Container,
  Grid,
  Header,
  List,
  Segment,
} from 'semantic-ui-react';
import Media from 'react-media';

import Layout from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';
import SocialButtons from '../components/SocialButtons';
import FacebookTimeline from '../components/FacebookTimeline';
import GoogleMap from '../components/GoogleMap';
import OutboundLink from '../components/OutboundLink';
import { LogoImage } from '../components/gatsbyImages';

export function IndexPageTemplate({
  content,
  contentComponent,
  image,
  title,
  description,
  relatedLinks,
}) {
  const backgroundImageUrl = !!image.childImageSharp
    ? image.childImageSharp.fluid.src
    : image;

  const PostContent = contentComponent || Content;

  return (
    <>
      <Media query={{ maxWidth: 991 }}>
        {matches => (
          <Link
            to={`/`}
            style={{
              alignItems: `center`,
              backgroundImage: `url(${backgroundImageUrl})`,
              backgroundPosition: `50% 50%`,
              backgroundAttachment: `fixed`,
              // backgroundSize: `cover`,
              display: `flex`,
              justifyContent: `center`,
              height: matches ? '300px' : '400px',
            }}
          >
            <div style={{ width: matches ? '200px' : '300px' }}>
              <LogoImage />
            </div>
          </Link>
        )}
      </Media>

      <Container style={{ display: 'flex' }}>
        <div style={{ flex: 1 }}>
          {content && (
            <Segment
              padded="very"
              vertical
              style={{ fontSize: '1.5rem', lineHeight: '1.7' }}
            >
              <PostContent content={content} />
            </Segment>
          )}

          <Segment padded="very" vertical>
            <Media query={{ maxWidth: 599 }}>
              {matches => (
                <Card.Group
                  centered
                  items={[
                    {
                      header: '大天神像（菅原道真公）',
                      meta: '日本一の大きさ',
                      image: 'img/tenjinzo.jpg',
                      fluid: matches,
                      as: Link,
                      to: '/tenjinzo',
                    },
                    {
                      header: '狐の嫁入り神事',
                      meta: '節分の日',
                      image: 'img/tenjinzo.jpg',
                      fluid: matches,
                      as: Link,
                      to: '/yomeiri',
                    },
                    {
                      header: 'Products',
                      meta: '毎月1日',
                      image: 'img/tenjinzo.jpg',
                      fluid: matches,
                      as: Link,
                      to: '/products',
                    },
                  ]}
                />
              )}
            </Media>
          </Segment>

          <Segment padded="very" vertical>
            <Header as="h2">交通案内</Header>
            <GoogleMap />

            <Segment vertical>
              <Header as="h3">
                <OutboundLink href="https://www.kintetsu.co.jp/railway/rosen/A50006.html">
                  近鉄電車
                </OutboundLink>
                でお越しのみなさまへ
              </Header>
              <OutboundLink href="https://ja.wikipedia.org/wiki/%E8%BF%91%E9%89%84%E5%90%8D%E5%8F%A4%E5%B1%8B%E7%B7%9A">
                近鉄名古屋線
              </OutboundLink>{' '}
              <OutboundLink href="https://ja.wikipedia.org/wiki/%E6%B5%B7%ÏE5%B1%B1%E9%81%93%E9%A7%85">
                海山道駅
              </OutboundLink>
              下車すぐ{'　'}
              <OutboundLink href="https://ja.wikipedia.org/wiki/%E6%B5%B7%E5%B1%B1%E9%81%93%E9%A7%85#/media/%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB:KINTETSU_MIYAMADO_STA.JPG">
                改札西出口
              </OutboundLink>
              より徒歩３０秒
            </Segment>

            <Segment vertical>
              <Header as="h3">
                <OutboundLink href="https://ja.wikipedia.org/wiki/%E4%BC%8A%E5%8B%A2%E6%B9%BE%E5%B2%B8%E8%87%AA%E5%8B%95%E8%BB%8A%E9%81%93">
                  伊勢湾岸自動車道
                </OutboundLink>
                でお越しのみなさまへ
              </Header>
              <OutboundLink href="https://ja.wikipedia.org/wiki/%E3%81%BF%E3%81%88%E5%B7%9D%E8%B6%8A%E3%82%A4%E3%83%B3%E3%82%BF%E3%83%BC%E3%83%81%E3%82%A7%E3%83%B3%E3%82%B8">
                みえ川越インターチェンジ
              </OutboundLink>
              下車{'　'}
              <OutboundLink href="https://ja.wikipedia.org/wiki/%E5%9B%BD%E9%81%9323%E5%8F%B7">
                国道２３号
              </OutboundLink>
              津方面 ２０分
            </Segment>

            <Segment vertical>
              <Header as="h3">
                <OutboundLink href="https://ja.wikipedia.org/wiki/%E5%90%8D%E9%98%AA%E5%9B%BD%E9%81%93">
                  名阪国道
                </OutboundLink>
                でお越しのみなさまへ
              </Header>
              <OutboundLink href="https://ja.wikipedia.org/wiki/%E4%BA%80%E5%B1%B1%E3%82%A4%E3%83%B3%E3%82%BF%E3%83%BC%E3%83%81%E3%82%A7%E3%83%B3%E3%82%B8">
                亀山インターチェンジ
              </OutboundLink>
              下車{'　'}
              <OutboundLink href="https://ja.wikipedia.org/wiki/%E5%9B%BD%E9%81%931%E5%8F%B7">
                国道1号
              </OutboundLink>
              四日市方面３０分
            </Segment>
          </Segment>

          {/* For mobile, show the Facebook here */}
          <Media
            query="(max-width: 991px)"
            render={() => (
              <>
                <Segment padded="very" vertical>
                  <Grid centered columns={2}>
                    <div>
                      <FacebookTimeline title="FacebookTimeline-mobile" />
                    </div>
                  </Grid>
                </Segment>
                <Segment vertical textAlign="center">
                  <SocialButtons />
                </Segment>
              </>
            )}
          />

          {relatedLinks.length > 0 && (
            <Segment padded="very" vertical>
              <Header as="h2">リンク</Header>
              <List>
                {relatedLinks.map((relatedLink, i) => (
                  <List.Item key={i}>
                    <OutboundLink href={relatedLink.href}>
                      {relatedLink.title}
                    </OutboundLink>
                  </List.Item>
                ))}
              </List>
            </Segment>
          )}
        </div>

        {/* For desktop, show the Facebook sidebar. */}
        <Media
          query="(min-width: 992px)"
          render={() => (
            <div style={{ marginLeft: '1rem' }}>
              <FacebookTimeline title="FacebookTimeline-desktop" />
            </div>
          )}
        />
      </Container>
    </>
  );
}

IndexPageTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  description: PropTypes.string,
  relatedLinks: PropTypes.array,
};

function IndexPage({ data: { markdownRemark } }) {
  return (
    <Layout>
      <IndexPageTemplate
        content={markdownRemark.html}
        contentComponent={HTMLContent}
        image={markdownRemark.frontmatter.image}
        title={markdownRemark.frontmatter.title}
        description={markdownRemark.frontmatter.description}
        relatedLinks={markdownRemark.frontmatter.relatedLinks}
      />
    </Layout>
  );
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      html
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        description
        relatedLinks {
          title
          href
        }
      }
    }
  }
`;
