import React from 'react';
import PropTypes from 'prop-types';
import { SimplePageTemplate } from '../../templates/simple-page';

const SimplePagePreview = ({ entry, widgetFor }) => (
  <SimplePageTemplate
    content={widgetFor('body')}
    description={entry.getIn(['data', 'description'])}
    title={entry.getIn(['data', 'title'])}
  />
);

SimplePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default SimplePagePreview;
