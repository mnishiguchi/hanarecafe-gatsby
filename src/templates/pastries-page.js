import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { Message } from 'semantic-ui-react';
import GatsbyImage from 'gatsby-image';

import Layout from '../components/Layout';
import MarkdownBody from '../components/MarkdownBody';
import AppContentContainer from '../components/AppContentContainer';
import HanarePastries from '../components/HanarePastries';
import useSiteMetadata from '../components/useSiteMetadata';

// Page title and description should be defined in the translation files.
// The markdown content will be an info message.
export function PastriesPageTemplate({
  markdownBody,
  isCms = false,
  mainImage,
  mainImageActive,
}) {
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
        {mainImageActive && (
          <GatsbyImage
            fluid={mainImage.childImageSharp.fluid}
            style={{ maxHeight: '600px' }}
          />
        )}
      </section>

      <HanarePastries />
    </AppContentContainer>
  );
}

PastriesPageTemplate.propTypes = {
  isCms: PropTypes.bool.isRequired,
  markdownBody: PropTypes.node.isRequired,
  mainImage: PropTypes.string,
  mainImageActive: PropTypes.bool,
};

function PastriesPage({ data: { markdownRemark } }) {
  return (
    <Layout>
      <PastriesPageTemplate
        isCms={false}
        markdownBody={markdownRemark.html}
        mainImage={markdownRemark.frontmatter.mainImage}
        mainImageActive={markdownRemark.frontmatter.mainImageActive}
      />
    </Layout>
  );
}

PastriesPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default PastriesPage;

export const pageQuery = graphql`
  query PastriesPageByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        mainImage {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        mainImageActive
      }
    }
  }
`;
