import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { Message } from 'semantic-ui-react';
import GatsbyImage from 'gatsby-image';
import { useTranslation } from 'react-i18next';

import Layout from '../components/Layout';
import MarkdownBody from '../components/MarkdownBody';
import AppContentContainer from '../components/AppContentContainer';
import useSiteMetadata from '../components/useSiteMetadata';
import { getCurrentLanguage } from '../lib/i18nUtils';

// Page title and description should be defined in the translation files.
// The markdown content will be an info message.
export function MeetTheOwnerPageTemplate({
  markdownBody,
  isCms = false,
  mainImage,
  mainImageActive,
}) {
  const { t, i18n } = useTranslation();
  const { pageTitle, pageDescription } = useSiteMetadata();

  return (
    <AppContentContainer>
      <section style={{ marginBottom: '2rem' }}>
        <h1>{pageTitle}</h1>
        <p>{pageDescription}</p>
        {markdownBody && (
          <Message color="yellow" size="big" style={{ marginTop: '1rem' }}>
            <MarkdownBody markdownBody={markdownBody} isCms={isCms} />
          </Message>
        )}
      </section>

      {mainImageActive && (
        <GatsbyImage fixed={mainImage.childImageSharp.fixed} />
      )}

      <h2>{t(`co-owners.atsushi.name`)}</h2>

      <p>{t(`co-owners.atsushi.description`)}</p>

      {getCurrentLanguage(i18n) === 'ja' && (
        <a href="http://www.nijinet.or.jp/publishing/shima/bn/tabid/219/Default.aspx">
          徳本篤司（2018）「妻の故郷、漁業の島でパン屋を経営（三重県答志島）」、『季刊しま』254
          号、公益財団法人 日本離島センター
        </a>
      )}

      <h2> {t(`co-owners.eri.name`)}</h2>

      <p>{t(`co-owners.eri.description`)}</p>
    </AppContentContainer>
  );
}

MeetTheOwnerPageTemplate.propTypes = {
  markdownBody: PropTypes.node.isRequired,
  isCms: PropTypes.bool.isRequired,
  mainImage: PropTypes.string,
  mainImageActive: PropTypes.bool,
};

function MeetTheOwnerPage({ data: { markdownRemark } }) {
  return (
    <Layout>
      <MeetTheOwnerPageTemplate
        markdownBody={markdownRemark.html}
        isCms={false}
        mainImage={markdownRemark.frontmatter.mainImage}
        mainImageActive={markdownRemark.frontmatter.mainImageActive}
      />
    </Layout>
  );
}

MeetTheOwnerPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default MeetTheOwnerPage;

export const pageQuery = graphql`
  query MeetTheOwnerPageByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        mainImage {
          childImageSharp {
            fixed(width: 300, height: 300) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        mainImageActive
      }
    }
  }
`;
