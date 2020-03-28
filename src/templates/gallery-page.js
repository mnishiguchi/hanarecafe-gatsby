import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { Container, Grid, Image, Segment } from 'semantic-ui-react';

import SEO from '../components/SEO';
import Layout from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';

const columnsSize = (array) => {
  switch (array.length) {
    case 1:
      return 1;
    case 2:
      return 2;
    default:
      return 3;
  }
};

export function GalleryPageTemplate({
  content,
  contentComponent,
  description,
  title,
  helmet,
  snapshots = [],
}) {
  const PostContent = contentComponent || Content;

  return (
    <Container style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
      <SEO title={title} description={description} />

      <h1>{title}</h1>
      <p>{description}</p>

      <PostContent content={content} />

      <Segment vertical>
        <Grid doubling columns={columnsSize(snapshots)}>
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
    </Container>
  );
}

GalleryPageTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  categories: PropTypes.array,
  snapshots: PropTypes.array,
};

function GalleryPage({ data: { markdownRemark } }) {
  return (
    <Layout>
      <GalleryPageTemplate
        content={markdownRemark.html}
        contentComponent={HTMLContent}
        title={markdownRemark.frontmatter.title}
        description={markdownRemark.frontmatter.description}
        snapshots={markdownRemark.frontmatter.snapshots}
      />
    </Layout>
  );
}

GalleryPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default GalleryPage;

export const pageQuery = graphql`
  query GalleryPageByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        description
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
