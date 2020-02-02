import React from 'react';
import PropTypes from 'prop-types';
import { CatalogPageTemplate } from '../../templates/catalog-page';

const CatalogPagePreview = ({ entry, widgetFor }) => (
  <CatalogPageTemplate
    content={widgetFor('body')}
    description={entry.getIn(['data', 'description'])}
    title={entry.getIn(['data', 'title'])}
  />
);

CatalogPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default CatalogPagePreview;
