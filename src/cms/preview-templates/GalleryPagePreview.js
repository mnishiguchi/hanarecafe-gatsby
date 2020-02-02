import React from 'react';
import PropTypes from 'prop-types';
import { GalleryPageTemplate } from '../../templates/gallery-page';

const GalleryPagePreview = ({ entry, widgetFor }) => (
  <GalleryPageTemplate
    content={widgetFor('body')}
    description={entry.getIn(['data', 'description'])}
    title={entry.getIn(['data', 'title'])}
  />
);

GalleryPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default GalleryPagePreview;
