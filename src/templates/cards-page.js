import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { Card, Container, Grid } from 'semantic-ui-react';
import Media from 'react-media';

import SEO from '../components/SEO';
import Layout from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';

export function CardsPageTemplate({
  content,
  contentComponent,
  description,
  title,
  helmet,
  cards = [],
}) {
  const PostContent = contentComponent || Content;

  return (
    <Container style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
      <SEO title={title} description={description} />

      <h1>{title}</h1>
      <p>{description}</p>

      <PostContent content={content} />

      <Media query={{ maxWidth: 599 }}>
        {matches =>
          matches ? (
            // For mobile, each card takes full width.
            cards.map(({ image, title, description }) => {
              const imageUrl = !!image.childImageSharp
                ? image.childImageSharp.fluid.src
                : image;
              return (
                <Card
                  key={imageUrl}
                  image={imageUrl}
                  header={title}
                  description={description}
                  fluid
                />
              );
            })
          ) : (
            // For larger devices, switch column count per row.
            <Grid doubling columns={5}>
              {cards.map(({ image, title, description }) => {
                const imageUrl = !!image.childImageSharp
                  ? image.childImageSharp.fluid.src
                  : image;
                return (
                  <Grid.Column key={imageUrl}>
                    <Card
                      image={imageUrl}
                      header={title}
                      description={description}
                    />
                  </Grid.Column>
                );
              })}
            </Grid>
          )
        }
      </Media>
    </Container>
  );
}

CardsPageTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  cards: PropTypes.array,
};

function CardsPage({ data: { markdownRemark } }) {
  return (
    <Layout>
      <CardsPageTemplate
        content={markdownRemark.html}
        contentComponent={HTMLContent}
        title={markdownRemark.frontmatter.title}
        description={markdownRemark.frontmatter.description}
        cards={markdownRemark.frontmatter.cards}
      />
    </Layout>
  );
}

CardsPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default CardsPage;

export const pageQuery = graphql`
  query CardsPageByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        description
        cards {
          title
          description
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
