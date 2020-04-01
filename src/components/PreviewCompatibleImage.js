import React from 'react';
import PropTypes from 'prop-types';
import GatsbyImage from 'gatsby-image';

// The image prop can be either an image src path or a Gatsby fluid image object.
// https://github.com/netlify-templates/gatsby-starter-netlify-cms/blob/d75913ecbe16881de28c98ea01d6de5cb9b4a713/src/components/PreviewCompatibleImage.js#L5
function PreviewCompatibleImage({
  image,
  childImageSharp = null,
  alt = '',
  style = {},
}) {
  if (image && image.childImageSharp) {
    return (
      <GatsbyImage
        style={style}
        fluid={image.childImageSharp.fluid}
        alt={alt}
      />
    );
  }

  if (childImageSharp) {
    return (
      <GatsbyImage style={style} fluid={childImageSharp.fluid} alt={alt} />
    );
  }

  if (image && typeof image === 'string')
    return <GatsbyImage style={style} src={image} alt={alt} />;

  return null;
}

PreviewCompatibleImage.propTypes = {
  alt: PropTypes.string,
  childImageSharp: PropTypes.object,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
  style: PropTypes.object,
};

export default PreviewCompatibleImage;
