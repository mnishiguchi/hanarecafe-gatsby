import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import GatsbyImage from 'gatsby-image';

import Layout from '../components/Layout';
import MarkdownBody from '../components/MarkdownBody';
import AppContentContainer from '../components/AppContentContainer';
import useSiteMetadata from '../components/useSiteMetadata';

// A template for generic pages with no translation.
// Page title and description should be defined in the translation files.
// The markdown content will be an additional content.
export function SimplePageTemplate({
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
        <MarkdownBody markdownBody={markdownBody} isCms={isCms} />
        {mainImageActive && (
          <GatsbyImage fluid={mainImage.childImageSharp.fluid} />
        )}
      </section>
    </AppContentContainer>
  );
}

SimplePageTemplate.propTypes = {
  markdownBody: PropTypes.node.isRequired,
  isCms: PropTypes.bool.isRequired,
  mainImage: PropTypes.string,
  mainImageActive: PropTypes.bool,
};

function SimplePage({ data: { markdownRemark } }) {
  return (
    <Layout>
      <SimplePageTemplate
        markdownBody={markdownRemark.html}
        isCms={false}
        mainImage={markdownRemark.frontmatter.mainImage}
        mainImageActive={markdownRemark.frontmatter.mainImageActive}
      />
    </Layout>
  );
}

SimplePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default SimplePage;

export const pageQuery = graphql`
  query SimplePageByID($id: String!) {
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
