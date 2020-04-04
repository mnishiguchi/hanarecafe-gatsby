import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import {
  Button,
  Container,
  Header,
  Icon,
  List,
  Message,
  Segment,
} from 'semantic-ui-react';
import Media from 'react-media';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import { useTranslation } from 'react-i18next';

import Layout from '../layouts/index';
import LandingHero from '../components/LandingHero';
import MarkdownBody from '../components/MarkdownBody';
import FacebookTimeline from '../components/FacebookTimeline';
import HanareDirections from '../components/HanareDirections';
import HanareIntroVideo from '../components/HanareIntroVideo';
import HanareServiceList from '../components/HanareServiceList';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';
import I18nLink from '../components/I18nLink';

function SeparatorWithBackgroundImage({
  backgroundImageUrl,
  height,
  width,
  ...rest
}) {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundPosition: `50% 50%`,
        backgroundAttachment: `fixed`,
        width: width || '100%',
        height: height || '8px',
      }}
      {...rest}
    />
  );
}

// Used for the website and the CMS.
export function IndexPageTemplate({
  markdownBody,
  isCms = false,
  mainBackgroundImage,
  mainImage,
  relatedLinks,
}) {
  const { t, i18n } = useTranslation();
  const backgroundImageUrl = !!mainBackgroundImage.childImageSharp
    ? mainBackgroundImage.childImageSharp.fluid.src
    : mainBackgroundImage;

  return (
    <>
      <LandingHero backgroundImageUrl={backgroundImageUrl} />

      <Container style={{ display: 'flex' }}>
        <div>
          {markdownBody && (
            <Message color="yellow" size="big" style={{ marginTop: '1rem' }}>
              <MarkdownBody markdownBody={markdownBody} isCms={isCms} />
            </Message>
          )}

          <Segment
            size="massive"
            padded
            vertical
            textAlign="left"
            style={{ lineHeight: '1.7' }}
          >
            {/* Inline custom styles for Japanese language only. */}
            {i18n.language === 'ja' ? (
              <>
                絶景観光スポット
                <OutboundLink href="https://ja.wikipedia.org/wiki/%E7%AD%94%E5%BF%97%E5%B3%B6">
                  <span title="とうしじま">答志島</span>
                </OutboundLink>
                の<span title="ももとりちょう">桃取町</span>にある
                <br />
                地元食材を使用した焼きたて創作パンのお店です。
              </>
            ) : (
              <>
                {t('site.description')}
                <br />
                <OutboundLink href="https://en.wikipedia.org/wiki/T%C5%8Dshijima">
                  Tōshijima - Wikipedia
                </OutboundLink>
              </>
            )}

            {/* For mobile, show the link to Facebook timeline page. */}
            <Media
              query="(max-width: 991px)"
              render={() => (
                <Button
                  primary
                  icon
                  labelPosition="right"
                  as={I18nLink}
                  to="/timeline"
                >
                  <Icon name="angle right" />
                  {t('labels.latest-news')}
                </Button>
              )}
            />
          </Segment>

          <PreviewCompatibleImage image={mainImage} />
          <HanareIntroVideo title="home.into-video" />
          <Segment padded="very" vertical size="large">
            <Header as="h2">{t('labels.services')}</Header>
            <HanareServiceList />
          </Segment>
          <SeparatorWithBackgroundImage
            backgroundImageUrl={backgroundImageUrl}
          />
          <Segment padded="very" vertical size="large">
            <Header as="h2">{t('labels.directions')}</Header>
            <HanareDirections />
          </Segment>
          {relatedLinks.length > 0 && (
            <>
              <SeparatorWithBackgroundImage
                backgroundImageUrl={backgroundImageUrl}
              />
              <Segment padded="very" vertical size="large">
                <Header as="h2">{t('labels.links')}</Header>
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
            </>
          )}
        </div>

        <aside>
          {/* For desktop, show the Facebook sidebar. */}
          <Media
            query="(min-width: 992px)"
            render={() => (
              <div style={{ marginLeft: '1rem' }}>
                <FacebookTimeline title="FacebookTimeline-desktop" />
              </div>
            )}
          />
        </aside>
      </Container>
    </>
  );
}

IndexPageTemplate.propTypes = {
  markdownBody: PropTypes.node.isRequired,
  isCms: PropTypes.bool.isRequired,
  mainBackgroundImage: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
  ]),
  mainImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  relatedLinks: PropTypes.array,
};

// Used for the website.
function IndexPage({ data: { markdownRemark } }) {
  return (
    <Layout>
      <IndexPageTemplate
        markdownBody={markdownRemark.html}
        isCms={false}
        mainBackgroundImage={markdownRemark.frontmatter.mainBackgroundImage}
        mainImage={markdownRemark.frontmatter.mainImage}
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
      fields {
        langKey
      }
      frontmatter {
        mainBackgroundImage {
          childImageSharp {
            fluid(maxWidth: 1024, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        mainImage {
          childImageSharp {
            fluid(maxWidth: 1024, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        relatedLinks {
          title
          href
        }
      }
    }
  }
`;
