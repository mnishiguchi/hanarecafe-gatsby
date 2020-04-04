import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Media from 'react-media';
import GatsbyImage from 'gatsby-image';

function LandingHero({ backgroundImageUrl }) {
  const data = useStaticQuery(graphql`
    query {
      logoImage: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Media query={{ maxWidth: 991 }}>
      {(matches) => (
        <header
          style={{
            alignItems: `center`,
            backgroundImage: `url(${backgroundImageUrl})`,
            backgroundPosition: `50% 50%`,
            backgroundAttachment: `cover`,
            display: `flex`,
            justifyContent: `center`,
            height: matches ? '300px' : '400px',
          }}
        >
          <GatsbyImage
            fluid={data.logoImage.childImageSharp.fluid}
            style={{ width: matches ? '200px' : '300px' }}
          />
        </header>
      )}
    </Media>
  );
}

export default LandingHero;
