import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { Card, Container, Grid, Message } from 'semantic-ui-react';
import Media from 'react-media';
import { useTranslation } from 'react-i18next';
import { useLocation } from '@reach/router';
import GatsbyImage from 'gatsby-image';

import PageHelmet from '../components/PageHelmet';
import Layout from '../components/Layout';
import { removeLeadingSlash } from '../lib/locationUtils';

export function CardsPageTemplate({ content, mainImage, cards = [] }) {
  const location = useLocation();
  const { t, i18n } = useTranslation();

  // TODO: Abstract this procedure to useSiteMetadata
  const isHomePage = location.pathname === '/';
  const pageKey = removeLeadingSlash(location.pathname);
  const siteAuthor = t('site.author');
  const siteTitle = t(`site.title`);
  const pageTitle = isHomePage ? null : t(`pages.${pageKey}.title`);
  const pageDescription = t(`pages.${pageKey}.description`);

  return (
    <Container style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
      <PageHelmet />

      <header style={{ marginBottom: '2rem' }}>
        <h1>{pageTitle}</h1>
        <p>{pageDescription}</p>
        {content && (
          <Message color="yellow" size="big" style={{ marginTop: '1rem' }}>
            <div dangerouslySetInnerHTML={{ __html: content }} />
          </Message>
        )}
        <GatsbyImage fluid={mainImage.childImageSharp.fluid} />
      </header>

      <Media query={{ maxWidth: 599 }}>
        {(matches) =>
          matches ? (
            // For mobile, each card takes full width.
            cards.map(({ image, title, mainImage }) => {
              const imageUrl = !!image.childImageSharp
                ? image.childImageSharp.fluid.src
                : image;
              return (
                <Card
                  key={imageUrl}
                  image={imageUrl}
                  header={title}
                  mainImage={mainImage}
                  fluid
                />
              );
            })
          ) : (
            // For larger devices, switch column count per row.
            <Grid doubling columns={5}>
              {cards.map(({ image, title, mainImage }) => {
                const imageUrl = !!image.childImageSharp
                  ? image.childImageSharp.fluid.src
                  : image;
                return (
                  <Grid.Column key={imageUrl}>
                    <Card
                      image={imageUrl}
                      header={title}
                      mainImage={mainImage}
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
  mainImage: PropTypes.string,
  cards: PropTypes.array,
};

function CardsPage({ data: { markdownRemark } }) {
  return (
    <Layout>
      <CardsPageTemplate
        content={markdownRemark.html}
        mainImage={markdownRemark.frontmatter.mainImage}
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
        mainImage {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
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
