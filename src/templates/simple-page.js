import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import GatsbyImage from 'gatsby-image';

import PageHelmet from '../components/PageHelmet';
import Layout from '../components/Layout';
import AppContentContainer from '../components/AppContentContainer';
import useSiteMetadata from '../components/useSiteMetadata';

// Page title and description should be defined in the translation files.
// The markdown content will be an additional content.
export function SimplePageTemplate({ content, mainImage, mainImageActive }) {
  const { pageTitle, pageDescription } = useSiteMetadata();

  return (
    <AppContentContainer>
      <PageHelmet />

      <section style={{ marginBottom: '2rem' }}>
        <h1>{pageTitle}</h1>
        <p>{pageDescription}</p>
        {content && <p dangerouslySetInnerHTML={{ __html: content }} />}
        {mainImageActive && (
          <GatsbyImage fluid={mainImage.childImageSharp.fluid} />
        )}
      </section>
    </AppContentContainer>
  );
}

SimplePageTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  mainImage: PropTypes.string,
  mainImageActive: PropTypes.bool,
};

function SimplePage({ data: { markdownRemark } }) {
  return (
    <Layout>
      <SimplePageTemplate
        content={markdownRemark.html}
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
