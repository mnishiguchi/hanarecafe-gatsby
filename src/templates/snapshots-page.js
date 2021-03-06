import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { Grid, Image, Message, Segment } from 'semantic-ui-react';
import GatsbyImage from 'gatsby-image';
import Media from 'react-media';

import Layout from '../layouts/index';
import MarkdownBody from '../components/MarkdownBody';
import AppContentContainer from '../components/AppContentContainer';
import useSiteMetadata from '../components/useSiteMetadata';

const arraySizeTocolumnsSize = (arraySize) => {
  if (arraySize < 3) return arraySize;
  return 3;
};

// A template for generic snapshots with no translation.
// Responsive column size change: 1, 2, 3
// Page title and description should be defined in the translation files.
// The markdown content will be an info message.
export function SnapshotsPageTemplate({
  markdownBody,
  isCms = false,
  mainImage,
  mainImageActive,
  snapshots = [],
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

      <Segment vertical>
        <Media query={{ maxWidth: 599 }}>
          {(matches) => {
            const colsize = matches
              ? 1
              : arraySizeTocolumnsSize(snapshots.length);

            return (
              <Grid doubling columns={colsize}>
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
            );
          }}
        </Media>
      </Segment>
    </AppContentContainer>
  );
}

SnapshotsPageTemplate.propTypes = {
  isCms: PropTypes.bool.isRequired,
  markdownBody: PropTypes.node.isRequired,
  mainImage: PropTypes.object,
  mainImageActive: PropTypes.bool,
  snapshots: PropTypes.array,
};

function SnapshotsPage({ data: { markdownRemark } }) {
  return (
    <Layout>
      <SnapshotsPageTemplate
        isCms={false}
        markdownBody={markdownRemark.html}
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
