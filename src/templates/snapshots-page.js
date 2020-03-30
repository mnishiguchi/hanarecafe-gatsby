import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { Grid, Image, Message, Segment } from 'semantic-ui-react';
import GatsbyImage from 'gatsby-image';

import PageHelmet from '../components/PageHelmet';
import Layout from '../components/Layout';
import AppContentContainer from '../components/AppContentContainer';
import useSiteMetadata from '../components/useSiteMetadata';

const arraySizeTocolumnsSize = (arraySize) => {
  if (arraySize < 3) return arraySize;
  return 3;
};

// Page title and description should be defined in the translation files.
// The markdown content will be an info message.
export function SnapshotsPageTemplate({
  content,
  mainImage,
  mainImageActive,
  snapshots = [],
}) {
  const { pageTitle, pageDescription } = useSiteMetadata();

  return (
    <AppContentContainer>
      <PageHelmet />

      <section style={{ marginBottom: '2rem' }}>
        <h1>{pageTitle}</h1>
        <p>{pageDescription}</p>
        {content && (
          <Message color="yellow" size="big" style={{ marginTop: '1rem' }}>
            <div dangerouslySetInnerHTML={{ __html: content }} />
          </Message>
        )}
        {mainImageActive && (
          <GatsbyImage
            fluid={mainImage.childImageSharp.fluid}
            style={{ maxHeight: '600px' }}
          />
        )}
      </section>

      <Segment vertical>
        <Grid doubling columns={arraySizeTocolumnsSize(snapshots.length)}>
          {snapshots.map(({ image, title }) => {
            const imageUrl = !!image.childImageSharp
              ? image.childImageSharp.fluid.src
              : image;
            return (
              <Grid.Column key={imageUrl}>
                <Image src={imageUrl} fluid />
              </Grid.Column>
            );
          })}
        </Grid>
      </Segment>
    </AppContentContainer>
  );
}

SnapshotsPageTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  mainImage: PropTypes.string,
  mainImageActive: PropTypes.bool,
  snapshots: PropTypes.array,
};

function SnapshotsPage({ data: { markdownRemark } }) {
  return (
    <Layout>
      <SnapshotsPageTemplate
        content={markdownRemark.html}
        mainImage={markdownRemark.frontmatter.mainImage}
        mainImageActive={markdownRemark.frontmatter.mainImageActive}
        snapshots={markdownRemark.frontmatter.snapshots}
      />
    </Layout>
  );
}

SnapshotsPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default SnapshotsPage;

export const pageQuery = graphql`
  query SnapshotsPageByID($id: String!) {
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
        snapshots {
          title
          image {
            childImageSharp {
              fluid(maxWidth: 600, quality: 64) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`;
